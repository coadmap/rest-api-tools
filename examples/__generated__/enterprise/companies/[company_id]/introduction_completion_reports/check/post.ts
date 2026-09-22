/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostCompaniesCompanyIdIntroductionCompletionReportsCheckUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdIntroductionCompletionReportsCheckResponse = Types.IntroductionCompletionReportRes

export type PostCompaniesCompanyIdIntroductionCompletionReportsCheckRequestBody = {
  introductionCompletionReport: {
    /** 採用企業 */
    companyId?: string | undefined
    /** 担当エージェントのaccount_id */
    agentId?: string | undefined
    /** 年収 */
    amount: number
    /** 紹介料（税抜） */
    commissionFeeWithoutTax: number
    /** 入社年月日 */
    joinedDate?: string | undefined
    /** 内定承諾日 */
    acceptanceOfOfferDate?: string | undefined
    /** 業種 */
    industryId?: string | undefined
    /** 職種 */
    occupationId?: string | undefined
    billingEmails?: string[] | undefined
    memo?: string | undefined
  }
}

export const postCompaniesCompanyIdIntroductionCompletionReportsCheck = new BaseRequest<
  PostCompaniesCompanyIdIntroductionCompletionReportsCheckRequestBody,
  PostCompaniesCompanyIdIntroductionCompletionReportsCheckResponse,
  PostCompaniesCompanyIdIntroductionCompletionReportsCheckUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/introduction_completion_reports/check",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
