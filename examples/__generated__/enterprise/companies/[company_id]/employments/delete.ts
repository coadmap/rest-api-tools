/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type DeleteCompaniesCompanyIdEmploymentsUrlParams = {
  companyId: string
} | undefined

export type DeleteCompaniesCompanyIdEmploymentsRequestBody = {
  employmentIds: string[]
}

export const deleteCompaniesCompanyIdEmployments = new BaseRequest<
  DeleteCompaniesCompanyIdEmploymentsRequestBody,
  undefined,
  DeleteCompaniesCompanyIdEmploymentsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/employments",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
