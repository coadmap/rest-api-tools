/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdRolesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdRolesIdResponse = Types.RoleRes

export type PatchCompaniesCompanyIdRolesIdRequestBody = {
  role: {
    name?: string | undefined
    policyIds?: string[] | undefined
    description?: string | undefined
  }
}

export const patchCompaniesCompanyIdRolesId = new BaseRequest<
  PatchCompaniesCompanyIdRolesIdRequestBody,
  PatchCompaniesCompanyIdRolesIdResponse,
  PatchCompaniesCompanyIdRolesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/roles/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
