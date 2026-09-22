/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type PostCompaniesCompanyIdInvoicesIdApprovedUrlParams = {
  companyId: string
  id: string
} | undefined

export type PostCompaniesCompanyIdInvoicesIdApprovedResponse = Types.InvoiceRes

export const postCompaniesCompanyIdInvoicesIdApproved = new BaseRequest<
  undefined,
  PostCompaniesCompanyIdInvoicesIdApprovedResponse,
  PostCompaniesCompanyIdInvoicesIdApprovedUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/invoices/:id/approved",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
