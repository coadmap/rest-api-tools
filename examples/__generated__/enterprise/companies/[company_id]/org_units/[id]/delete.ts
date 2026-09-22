/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type DeleteCompaniesCompanyIdOrgUnitsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdOrgUnitsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdOrgUnitsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/org_units/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
