/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../../../shared/index";
import { API_HOST } from "../../../../../../../urls";

export type PostCompaniesCompanyIdIntroductionCompletionReportsIntroductionCompletionReportIdPayPaymentIntentIdConfirmUrlParams = {
  companyId: string
  introductionCompletionReportId: string
  paymentIntentId: string
} | undefined

export const postCompaniesCompanyIdIntroductionCompletionReportsIntroductionCompletionReportIdPayPaymentIntentIdConfirm = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdIntroductionCompletionReportsIntroductionCompletionReportIdPayPaymentIntentIdConfirmUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/introduction_completion_reports/:introductionCompletionReportId/pay/:paymentIntentId/confirm",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
