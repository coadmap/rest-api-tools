/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdEmploymentsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdEmploymentsResponse = Types.EmploymentsRes

export type GetCompaniesCompanyIdEmploymentsQueryParams = {
  /** キーワード */
  keyword?: string | undefined
  /** ロールカテゴリー */
  roleCategory?: 'member' | 'guest' | undefined
  /** ロール */
  roleIds?: string[] | undefined
  /** 組織 */
  orgUnitIds?: string[] | undefined
  /** 名前でソート */
  sortAscByName?: boolean | undefined
  /** emailでソート */
  sortAscByEmail?: boolean | undefined
  /** 最終ログインでソート */
  sortAscByLastSignInAt?: boolean | undefined
}

export const getCompaniesCompanyIdEmployments = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdEmploymentsResponse,
  GetCompaniesCompanyIdEmploymentsUrlParams,
  GetCompaniesCompanyIdEmploymentsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/employments",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
