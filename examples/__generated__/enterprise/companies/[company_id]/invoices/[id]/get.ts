/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdInvoicesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdInvoicesIdResponse = Types.InvoiceRes

export const getCompaniesCompanyIdInvoicesId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdInvoicesIdResponse,
  GetCompaniesCompanyIdInvoicesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/invoices/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
