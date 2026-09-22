/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type PostCompaniesCompanyIdInvoicesIdFinishedPaymentUrlParams = {
  companyId: string
  id: string
} | undefined

export type PostCompaniesCompanyIdInvoicesIdFinishedPaymentResponse = Types.InvoiceRes

export const postCompaniesCompanyIdInvoicesIdFinishedPayment = new BaseRequest<
  undefined,
  PostCompaniesCompanyIdInvoicesIdFinishedPaymentResponse,
  PostCompaniesCompanyIdInvoicesIdFinishedPaymentUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/invoices/:id/finished_payment",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
