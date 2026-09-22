/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type PostCompaniesCompanyIdInvoicesIdConfirmUrlParams = {
  companyId: string
  id: string
} | undefined

export type PostCompaniesCompanyIdInvoicesIdConfirmResponse = Types.InvoiceRes

export type PostCompaniesCompanyIdInvoicesIdConfirmRequestBody = {
  invoice: {
    paymentMethod?: 'bank' | 'credit_card' | undefined
  }
}

export const postCompaniesCompanyIdInvoicesIdConfirm = new BaseRequest<
  PostCompaniesCompanyIdInvoicesIdConfirmRequestBody,
  PostCompaniesCompanyIdInvoicesIdConfirmResponse,
  PostCompaniesCompanyIdInvoicesIdConfirmUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/invoices/:id/check",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
