/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdIntroductionCompletionReportsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdIntroductionCompletionReportsIdResponse = Types.IntroductionCompletionReportRes

export type PatchCompaniesCompanyIdIntroductionCompletionReportsIdRequestBody = {
  introductionCompletionReport: {
    /** 担当エージェントのaccount_id */
    agentId?: string | undefined
    /** 年収 */
    amount?: number | undefined
    /** 紹介料（税抜） */
    commissionFeeWithoutTax?: number | undefined
    /** 入社年月日 */
    joinedDate?: string | undefined
    /** 内定承諾日 */
    acceptanceOfOfferDate?: string | undefined
    /** 業種 */
    industryId?: string | undefined
    /** 職種 */
    occupationId?: string | undefined
    billingEmails?: string[] | undefined
    /** 取り消し理由 */
    reasonForCancellation?: string | undefined
    memo?: string | undefined
    isEnable?: boolean | undefined
  }
}

export const patchCompaniesCompanyIdIntroductionCompletionReportsId = new BaseRequest<
  PatchCompaniesCompanyIdIntroductionCompletionReportsIdRequestBody,
  PatchCompaniesCompanyIdIntroductionCompletionReportsIdResponse,
  PatchCompaniesCompanyIdIntroductionCompletionReportsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/introduction_completion_reports/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
