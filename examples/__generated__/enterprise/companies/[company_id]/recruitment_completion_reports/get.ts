/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdRecruitmentCompletionReportsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdRecruitmentCompletionReportsResponse = Types.RecruitmentCompletionReportsRes

export const getCompaniesCompanyIdRecruitmentCompletionReports = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRecruitmentCompletionReportsResponse,
  GetCompaniesCompanyIdRecruitmentCompletionReportsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/recruitment_completion_reports",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
