/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PatchCompaniesCompanyIdEmploymentsUrlParams = {
  companyId: string
} | undefined

export type PatchCompaniesCompanyIdEmploymentsRequestBody = {
  employmentIds: string[]
  orgUnitIds: string[]
}

export const patchCompaniesCompanyIdEmployments = new BaseRequest<
  PatchCompaniesCompanyIdEmploymentsRequestBody,
  undefined,
  PatchCompaniesCompanyIdEmploymentsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/employments",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
