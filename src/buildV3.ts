import { OpenAPIV3 } from "openapi-types";
import humps from "humps";
import {
  $ref2Type,
  BINARY_TYPE,
  getPropertyName,
  isRefObject,
  schema2value,
} from "./builderUtils/converters";
import schemas2Props from "./builderUtils/schemas2Props";
import { Prop, props2StringForParams, PropValue } from "./builderUtils/props2String";
import { resolveReqRef, resolveResRef } from "./builderUtils/resolvers";
import { BaseConfig, CodeGenConfig } from "./types";

export const buildV3 = (
  openapi: OpenAPIV3.Document,
  config: CodeGenConfig,
  baseConfig: BaseConfig
) => {
  const files: { file: string[]; methods: string[] }[] = [];
  const schemas = schemas2Props(openapi.components?.schemas, openapi) || [];
  const apiMethods: {
    operationIdImport: string;
    operationIdExport: string;
    operationId: string;
  }[] = [];
  const apiUrlContent =
    "export const API_HOST = ((): string => {\n" +
    `  const environment = import.meta.env.${config.apiEnvironmentVariables};\n` +
    `  switch (environment) {\n` +
    `${openapi.servers
      ?.map((server) => {
        if (!server.description) throw new Error("descriptionに環境を入力してください");

        return `    case environment?.includes("${server.description.toLowerCase()}") && environment:\n      return "${
          server.url
        }";\n`;
      })
      .join("")}` +
    `    default:\n      throw new Error("環境変数が設定されていません");\n` +
    "  }\n" +
    "})();\n";

  // URLParamsはエンドポイントで共通なのでメソッドよりも先に処理をしている
  Object.entries(openapi.paths).forEach(([path, targetUrl]) => {
    const urlParams: Prop[] = [];

    if (!targetUrl) return;

    // targetUrl.parametersはurlParamsのこと
    if (targetUrl.parameters) {
      targetUrl.parameters.forEach((p) => {
        if (isRefObject(p)) {
          // refは今存在しないので後回し
        } else {
          const value = schema2value(p.schema, true);
          if (!value) return;
          const prop: Prop = {
            name: humps.camelize(getPropertyName(p.name)),
            required: p.required ?? false,
            description: p.description ?? null,
            values: [value],
          };
          urlParams.push(prop);
        }
      });
    }
    // 前で処理を終えているため
    // eslint-disable-next-line no-param-reassign
    delete targetUrl.parameters;
    Object.entries(targetUrl).forEach(([method, target]) => {
      // フィアルパスを配列で作成
      const file = [
        ...path
          .replace(/\/$/, "")
          .split("/")
          .slice(1)
          .map((p) => p.replace("{", "[").replace("}", "]")),
        method,
      ];
      const params: Prop[] = urlParams.length
        ? [
            {
              name: "urlParams",
              required: false,
              description: null,
              values: [
                {
                  isArray: false,
                  isEnum: false,
                  nullable: false,
                  description: null,
                  value: urlParams,
                },
              ],
            },
          ]
        : [];

      // 前で処理を終えているため(ここでparametersの処理をしてもよいか、型がやや面倒くさそうだった
      if (Array.isArray(target) || typeof target === "string") return;
      if (!target.operationId) {
        console.log(`${path} ${method}のoperationId存在しません`);
        return;
      }
      const pascalizedTargetOperationId = humps.pascalize(target.operationId);
      apiMethods.push({
        operationId: humps.camelize(target.operationId),
        operationIdExport: `export * from "./${file.join("/")}"`,
        operationIdImport: `import { ${humps.camelize(target.operationId)} } from "./${file.join(
          "/"
        )}"`,
      });

      if (target.responses) {
        const code = Object.keys(target.responses).find((res) => res.match(/^(20\d|30\d)$/));
        if (code) {
          const res = target.responses[code];
          const ref = isRefObject(res) ? resolveResRef(openapi, res.$ref) : res;
          const content =
            (ref.content &&
              Object.entries(ref.content).find(([key]) => key.startsWith("application/"))?.[1]) ??
            ref.content?.[Object.keys(ref.content)[0]];
          if (content?.schema) {
            const val = schema2value(content.schema, true, true);
            if (val) {
              const resProp: Prop = {
                name: "response",
                required: true,
                // example response消すため
                description: "",
                values: [val],
              };
              params.push(resProp);
            }
          }
        }
      }
      if (target.requestBody) {
        // TODO: reqFormatは一旦無視
        let reqFormat = "";
        let reqBody: PropValue | null = null;
        let required;
        let description: string | null;
        if (isRefObject(target.requestBody)) {
          const ref = resolveReqRef(openapi, target.requestBody.$ref);
          if (ref.content["multipart/form-data"]?.schema) {
            reqFormat = "FormData";
          }

          reqBody = {
            isArray: false,
            isEnum: false,
            nullable: false,
            description: null,
            value: $ref2Type(target.requestBody.$ref),
          };
          required = ref.required ?? true;
          description = ref.description ?? null;
        } else {
          required = target.requestBody.required ?? true;
          description = target.requestBody.description ?? null;

          if (target.requestBody.content["multipart/form-data"]?.schema) {
            reqFormat = "FormData";
            reqBody = schema2value(target.requestBody.content["multipart/form-data"].schema, true);
          } else {
            const content =
              target.requestBody.content &&
              Object.entries(target.requestBody.content).find(([key]) =>
                key.startsWith("application/")
              )?.[1];

            if (content?.schema) reqBody = schema2value(content.schema, true);
          }
        }
        if (reqBody) {
          const requestBody: Prop = {
            name: "requestBody",
            required,
            description,
            values: [reqBody],
          };
          params.push(requestBody);
        }
      }
      if (target.parameters) {
        const queryParams: Prop[] = [];
        target.parameters.forEach((p) => {
          if (isRefObject(p)) {
            // refは今存在しないので後回し
          } else {
            const value = schema2value(p.schema, true);
            if (!value) return;
            const prop = {
              name: getPropertyName(p.name),
              required: p.required ?? false,
              description: p.description ?? null,
              values: [value],
            };
            switch (p.in) {
              case "query":
                queryParams.push(prop);
                break;
              default:
            }
          }
        });
        params.push({
          name: "queryParams",
          required: true,
          description: null,
          values: [
            {
              isArray: false,
              isEnum: false,
              nullable: false,
              description: null,
              value: queryParams,
            },
          ],
        });
      }
      const methods: string[] = [];
      let responseType = "";
      methods.push(
        `/* eslint-disable */\n` +
          `import { BaseRequest } from "@coadmap/rest-api-tools";\n` +
          `import type * as Types from "../${file.map(() => "").join("../")}shared/index";\n` +
          `import { API_HOST } from "${file.map(() => "").join("../")}urls";\n`
      );
      params.forEach((param) => {
        switch (param.name) {
          case "urlParams":
            methods.push(
              `export type ${pascalizedTargetOperationId}UrlParams = ${props2StringForParams(
                [param],
                ""
              )}`
            );
            break;
          case "queryParams":
            methods.push(
              `export type ${pascalizedTargetOperationId}QueryParams = ${props2StringForParams(
                [param],
                ""
              )}`
            );
            return;
          case "requestBody":
            methods.push(
              `export type ${pascalizedTargetOperationId}RequestBody = ${props2StringForParams(
                [param],
                ""
              )}`
            );
            break;
          case "response":
            methods.push(
              `export type ${pascalizedTargetOperationId}Response = ${props2StringForParams(
                [param],
                ""
              )}`
            );
            responseType = `${pascalizedTargetOperationId}Response`;
            break;
          default:
        }
      });

      const requestPath = path
        .replace(/\/$/, "")
        .split("/")
        .map((p) => {
          const modelId = p.match(/\{(.+)\}/)?.[1];
          // Refactor
          if (p.match(/\{(.+)\}/)?.[1]) {
            return modelId ? `:${humps.camelize(modelId)}` : "";
          }
          return p;
        })
        .join("/");
      const hasResponse = methods.join("").includes("Response");
      const hasQueryParams = methods.join("").includes("QueryParams");
      const hasRequestBody = methods.join("").includes("RequestBody");
      const hasUrlParams = methods.join("").includes("UrlParams");
      const hasFileType = methods.join("").includes(BINARY_TYPE);

      const baseRequest =
        `export const ${humps.camelize(target.operationId)} = new BaseRequest<\n` +
        `  ${hasRequestBody ? `${pascalizedTargetOperationId}RequestBody` : undefined},\n` +
        `  ${hasResponse ? `${pascalizedTargetOperationId}Response` : undefined},\n` +
        `  ${hasUrlParams ? `${pascalizedTargetOperationId}UrlParams` : undefined},\n` +
        `  ${hasQueryParams ? `${pascalizedTargetOperationId}QueryParams` : undefined}\n` +
        ">({\n" +
        `  requiredAuth: ${config.requiredAuth},\n` +
        `  method: "${method}",\n` +
        `  baseURL: ${config.baseUrlEnvVarName ? `import.meta.env.${config.baseUrlEnvVarName} ?? API_HOST` : "API_HOST"},\n` +
        `  path: "${requestPath}",\n` +
        `  tokenKey: "${baseConfig.tokenKey}",\n` +
        `  contentType: "${hasFileType ? "formData" : "json"}",\n` +
        "});\n";
      methods.push(baseRequest);
      files.push({
        file,
        methods,
      });
    });
  });

  return {
    schemas,
    files,
    apiMethods,
    apiUrlContent,
  };
};
