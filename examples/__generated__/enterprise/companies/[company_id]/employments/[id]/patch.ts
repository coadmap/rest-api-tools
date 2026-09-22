/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdEmploymentsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdEmploymentsIdResponse = Types.EmploymentRes

export type PatchCompaniesCompanyIdEmploymentsIdRequestBody = {
  employment: {
    email?: string | undefined
    roleIds?: string[] | undefined
    orgUnitIds?: string[] | undefined
  }
}

export const patchCompaniesCompanyIdEmploymentsId = new BaseRequest<
  PatchCompaniesCompanyIdEmploymentsIdRequestBody,
  PatchCompaniesCompanyIdEmploymentsIdResponse,
  PatchCompaniesCompanyIdEmploymentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/employments/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
