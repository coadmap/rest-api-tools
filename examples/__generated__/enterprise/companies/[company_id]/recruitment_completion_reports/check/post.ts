/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostCompaniesCompanyIdRecruitmentCompletionReportsCheckUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdRecruitmentCompletionReportsCheckResponse = Types.RecruitmentCompletionReportRes

export type PostCompaniesCompanyIdRecruitmentCompletionReportsCheckRequestBody = {
  recruitmentCompletionReport: {
    /** 内定承諾日 */
    acceptanceOfOfferDate?: string | undefined
    /** 業種 */
    industryId?: string | undefined
    /** 職種 */
    occupationId?: string | undefined
    billingEmails?: string[] | undefined
    amount: number
    accountId: string
    companyId?: string | undefined
    memo?: string | undefined
    joinedDate?: string | undefined
  }
}

export const postCompaniesCompanyIdRecruitmentCompletionReportsCheck = new BaseRequest<
  PostCompaniesCompanyIdRecruitmentCompletionReportsCheckRequestBody,
  PostCompaniesCompanyIdRecruitmentCompletionReportsCheckResponse,
  PostCompaniesCompanyIdRecruitmentCompletionReportsCheckUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/recruitment_completion_reports/check",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
