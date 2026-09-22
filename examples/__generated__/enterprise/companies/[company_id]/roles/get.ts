/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdRolesUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdRolesResponse = Types.RolesRes

export const getCompaniesCompanyIdRoles = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRolesResponse,
  GetCompaniesCompanyIdRolesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/roles",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
