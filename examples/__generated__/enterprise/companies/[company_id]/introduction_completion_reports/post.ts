/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdIntroductionCompletionReportsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdIntroductionCompletionReportsResponse = Types.IntroductionCompletionReportRes

export type PostCompaniesCompanyIdIntroductionCompletionReportsRequestBody = {
  introductionCompletionReport: {
    /** 採用企業 */
    companyId: string
    /** generalのaccountId */
    accountId: string
    /** 担当エージェントのaccount_id */
    agentId: string
    /** 年収 */
    amount: number
    /** 紹介料（税抜） */
    commissionFeeWithoutTax: number
    /** 入社年月日 */
    joinedDate: string
    /** 内定承諾日 */
    acceptanceOfOfferDate: string
    /** 業種 */
    industryId: string
    /** 職種 */
    occupationId: string
    billingEmails?: string[] | undefined
    memo?: string | undefined
  }
}

export const postCompaniesCompanyIdIntroductionCompletionReports = new BaseRequest<
  PostCompaniesCompanyIdIntroductionCompletionReportsRequestBody,
  PostCompaniesCompanyIdIntroductionCompletionReportsResponse,
  PostCompaniesCompanyIdIntroductionCompletionReportsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/introduction_completion_reports",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
