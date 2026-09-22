/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdIntroductionCompletionReportsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdIntroductionCompletionReportsResponse = Types.IntroductionCompletionReportsRes

export const getCompaniesCompanyIdIntroductionCompletionReports = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdIntroductionCompletionReportsResponse,
  GetCompaniesCompanyIdIntroductionCompletionReportsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/introduction_completion_reports",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
