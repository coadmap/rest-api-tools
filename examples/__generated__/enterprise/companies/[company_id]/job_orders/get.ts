/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdJobOrdersUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdJobOrdersResponse = Types.JobOrdersRes

export type GetCompaniesCompanyIdJobOrdersQueryParams = {
  /** キーワード */
  keyword?: string | undefined
  /** 募集 */
  recruitmentId?: string | undefined
  /** 受注者 */
  accountId?: string | undefined
  /** ステータス */
  status?: 'draft' | 'applied' | 'certificated' | 'rejected' | undefined
}

export const getCompaniesCompanyIdJobOrders = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdJobOrdersResponse,
  GetCompaniesCompanyIdJobOrdersUrlParams,
  GetCompaniesCompanyIdJobOrdersQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/job_orders",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
