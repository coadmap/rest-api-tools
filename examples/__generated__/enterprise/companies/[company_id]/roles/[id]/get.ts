/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdRolesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdRolesIdResponse = Types.RoleRes

export const getCompaniesCompanyIdRolesId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRolesIdResponse,
  GetCompaniesCompanyIdRolesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/roles/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
