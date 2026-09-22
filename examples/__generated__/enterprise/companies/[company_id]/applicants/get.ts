/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdApplicantsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdApplicantsResponse = Types.ApplicantsRes

export const getCompaniesCompanyIdApplicants = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdApplicantsResponse,
  GetCompaniesCompanyIdApplicantsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/applicants",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
