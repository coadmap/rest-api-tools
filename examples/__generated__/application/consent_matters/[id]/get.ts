/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetContentMattersIdUrlParams = {
  id: string
} | undefined

export type GetContentMattersIdResponse = Types.ConsentMatter

export const getContentMattersId = new BaseRequest<
  undefined,
  GetContentMattersIdResponse,
  GetContentMattersIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/consent_matters/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
