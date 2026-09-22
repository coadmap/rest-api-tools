/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdRecruitmentCompletionReportsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdRecruitmentCompletionReportsIdResponse = Types.RecruitmentCompletionReportRes

export const getCompaniesCompanyIdRecruitmentCompletionReportsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRecruitmentCompletionReportsIdResponse,
  GetCompaniesCompanyIdRecruitmentCompletionReportsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/recruitment_completion_reports/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
