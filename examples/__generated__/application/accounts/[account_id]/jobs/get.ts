/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdJobsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdJobsResponse = Types.JobsRes

export type GetAccountsAccountIdJobsQueryParams = {
  /** ステータス */
  status?: 'in_progress' | 'completed' | undefined
  /** キーワード */
  keyword?: string | undefined
  /** 募集 */
  recruitmentId?: string | undefined
  /** 発注者 */
  companyId?: string | undefined
}

export const getAccountsAccountIdJobs = new BaseRequest<
  undefined,
  GetAccountsAccountIdJobsResponse,
  GetAccountsAccountIdJobsUrlParams,
  GetAccountsAccountIdJobsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/jobs",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
