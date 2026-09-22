/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type DeleteCompaniesCompanyIdScoutTemplatesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdScoutTemplatesId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdScoutTemplatesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/scout_templates/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
