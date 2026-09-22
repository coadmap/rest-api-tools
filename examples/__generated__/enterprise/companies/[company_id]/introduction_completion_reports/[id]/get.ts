/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdIntroductionCompletionReportsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdIntroductionCompletionReportsIdResponse = Types.IntroductionCompletionReportRes

export const getCompaniesCompanyIdIntroductionCompletionReportsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdIntroductionCompletionReportsIdResponse,
  GetCompaniesCompanyIdIntroductionCompletionReportsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/introduction_completion_reports/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
