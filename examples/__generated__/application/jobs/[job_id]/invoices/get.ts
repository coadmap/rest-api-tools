/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetJobsJobIdInvoicesUrlParams = {
  jobId: string
} | undefined

export type GetJobsJobIdInvoicesResponse = Types.InvoicesRes

export type GetJobsJobIdInvoicesQueryParams = {
  page?: number | undefined
}

export const getJobsJobIdInvoices = new BaseRequest<
  undefined,
  GetJobsJobIdInvoicesResponse,
  GetJobsJobIdInvoicesUrlParams,
  GetJobsJobIdInvoicesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/jobs/:jobId/invoices",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
