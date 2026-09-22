/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type GetCompaniesCompanyIdWorksWorkIdInvoicesUrlParams = {
  companyId: string
  jobId: string
} | undefined

export type GetCompaniesCompanyIdWorksWorkIdInvoicesResponse = Types.InvoicesRes

export type GetCompaniesCompanyIdWorksWorkIdInvoicesQueryParams = {
  page?: number | undefined
}

export const getCompaniesCompanyIdWorksWorkIdInvoices = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdWorksWorkIdInvoicesResponse,
  GetCompaniesCompanyIdWorksWorkIdInvoicesUrlParams,
  GetCompaniesCompanyIdWorksWorkIdInvoicesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/jobs/:jobId/invoices",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
