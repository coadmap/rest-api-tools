/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type DeleteCompaniesCompanyIdRolesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdRolesId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdRolesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/roles/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
