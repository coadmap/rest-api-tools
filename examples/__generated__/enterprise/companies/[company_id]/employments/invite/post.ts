/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostCompaniesCompanyIdEmploymentsInviteUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdEmploymentsInviteResponse = Types.EmploymentsRes

export type PostCompaniesCompanyIdEmploymentsInviteRequestBody = {
  roleIds: string[]
  emails: string[]
  orgUnitIds: string[]
}

export const postCompaniesCompanyIdEmploymentsInvite = new BaseRequest<
  PostCompaniesCompanyIdEmploymentsInviteRequestBody,
  PostCompaniesCompanyIdEmploymentsInviteResponse,
  PostCompaniesCompanyIdEmploymentsInviteUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/employments/invite",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
