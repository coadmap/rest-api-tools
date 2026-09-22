/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdJobOrdersUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdJobOrdersResponse = Types.JobOrdersRes

export type GetAccountsAccountIdJobOrdersQueryParams = {
  /** ステータス */
  status?: 'draft' | 'applied' | 'certificated' | 'rejected' | undefined
  /** キーワード */
  keyword?: string | undefined
  /** 募集 */
  recruitmentId?: string | undefined
  /** 発注者 */
  companyId?: string | undefined
}

export const getAccountsAccountIdJobOrders = new BaseRequest<
  undefined,
  GetAccountsAccountIdJobOrdersResponse,
  GetAccountsAccountIdJobOrdersUrlParams,
  GetAccountsAccountIdJobOrdersQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/job_orders",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
