/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../../../shared/index";
import { API_HOST } from "../../../../../../../urls";

export type PostCompaniesCompanyIdRecruitmentCompletionReportsRecruitmentCompletionReportIdPayPaymentIntentIdConfirmUrlParams = {
  companyId: string
  recruitmentCompletionReportId: string
  paymentIntentId: string
} | undefined

export const postCompaniesCompanyIdRecruitmentCompletionReportsRecruitmentCompletionReportIdPayPaymentIntentIdConfirm = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdRecruitmentCompletionReportsRecruitmentCompletionReportIdPayPaymentIntentIdConfirmUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/recruitment_completion_reports/:recruitmentCompletionReportId/pay/:paymentIntentId/confirm",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
