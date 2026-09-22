/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdEmploymentsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdEmploymentsResponse = Types.EmploymentRes

export type PostCompaniesCompanyIdEmploymentsRequestBody = {
  employment: {
    accountId: string
    email: string
    roleIds: string[]
    orgUnitIds: string[]
  }
}

export const postCompaniesCompanyIdEmployments = new BaseRequest<
  PostCompaniesCompanyIdEmploymentsRequestBody,
  PostCompaniesCompanyIdEmploymentsResponse,
  PostCompaniesCompanyIdEmploymentsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/employments",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
