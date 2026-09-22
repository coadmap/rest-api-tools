/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdRolesUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdRolesResponse = Types.RoleRes

export type PostCompaniesCompanyIdRolesRequestBody = {
  role: {
    name: string
    policyIds?: string[] | undefined
    description?: string | undefined
  }
}

export const postCompaniesCompanyIdRoles = new BaseRequest<
  PostCompaniesCompanyIdRolesRequestBody,
  PostCompaniesCompanyIdRolesResponse,
  PostCompaniesCompanyIdRolesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/roles",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
