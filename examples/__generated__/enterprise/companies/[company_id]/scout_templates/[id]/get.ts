/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdScoutTemplatesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdScoutTemplatesIdResponse = Types.ScoutTemplateRes

export const getCompaniesCompanyIdScoutTemplatesId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdScoutTemplatesIdResponse,
  GetCompaniesCompanyIdScoutTemplatesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/scout_templates/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
