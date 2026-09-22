/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdRecruitmentCompletionReportsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdRecruitmentCompletionReportsResponse = Types.RecruitmentCompletionReportRes

export type PostCompaniesCompanyIdRecruitmentCompletionReportsRequestBody = {
  recruitmentCompletionReport: {
    /** 内定承諾日 */
    acceptanceOfOfferDate: string
    /** 業種 */
    industryId: string
    /** 職種 */
    occupationId: string
    billingEmails?: string[] | undefined
    amount: number
    accountId: string
    companyId: string
    memo?: string | undefined
    joinedDate: string
  }
}

export const postCompaniesCompanyIdRecruitmentCompletionReports = new BaseRequest<
  PostCompaniesCompanyIdRecruitmentCompletionReportsRequestBody,
  PostCompaniesCompanyIdRecruitmentCompletionReportsResponse,
  PostCompaniesCompanyIdRecruitmentCompletionReportsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/recruitment_completion_reports",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
