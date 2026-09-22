/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdRecruitmentCompletionReportsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdRecruitmentCompletionReportsIdResponse = Types.RecruitmentCompletionReportRes

export type PatchCompaniesCompanyIdRecruitmentCompletionReportsIdRequestBody = {
  recruitmentCompletionReport: {
    /** 内定承諾日 */
    acceptanceOfOfferDate?: string | undefined
    /** 業種 */
    industryId?: string | undefined
    /** 職種 */
    occupationId?: string | undefined
    billingEmails?: string[] | undefined
    amount?: number | undefined
    joinedDate?: string | undefined
    /** 取り消し理由 */
    reasonForCancellation?: string | undefined
    memo?: string | undefined
    isEnable?: boolean | undefined
  }
}

export const patchCompaniesCompanyIdRecruitmentCompletionReportsId = new BaseRequest<
  PatchCompaniesCompanyIdRecruitmentCompletionReportsIdRequestBody,
  PatchCompaniesCompanyIdRecruitmentCompletionReportsIdResponse,
  PatchCompaniesCompanyIdRecruitmentCompletionReportsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/recruitment_completion_reports/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
