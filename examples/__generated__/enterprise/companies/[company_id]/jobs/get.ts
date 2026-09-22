/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdJobsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdJobsResponse = Types.JobsRes

export type GetCompaniesCompanyIdJobsQueryParams = {
  /** ステータス */
  status?: 'in_progress' | 'completed' | undefined
  /** キーワード */
  keyword?: string | undefined
  /** 未払請求書 */
  existsUnpaidInvoice?: boolean | undefined
  /** 募集 */
  recruitmentId?: string | undefined
  /** 受注者 */
  accountId?: string | undefined
}

export const getCompaniesCompanyIdJobs = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdJobsResponse,
  GetCompaniesCompanyIdJobsUrlParams,
  GetCompaniesCompanyIdJobsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/jobs",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
