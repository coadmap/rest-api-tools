/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../../shared/index";
import { API_HOST } from "../../../../../../urls";

export type PostCompaniesCompanyIdScoutTicketsPayPaymentIntentIdConfirmUrlParams = {
  companyId: string
  paymentIntentId: string
} | undefined

export const postCompaniesCompanyIdScoutTicketsPayPaymentIntentIdConfirm = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdScoutTicketsPayPaymentIntentIdConfirmUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/scout_tickets/pay/:paymentIntentId/confirm",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
