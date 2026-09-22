/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type GetCompaniesCompanyIdKeepingListsKeepingListIdAccountsUrlParams = {
  companyId: string
  keepingListId: string
} | undefined

export type GetCompaniesCompanyIdKeepingListsKeepingListIdAccountsResponse = Types.AccountsRes

export type GetCompaniesCompanyIdKeepingListsKeepingListIdAccountsQueryParams = {
  /** 自分が送ったスカウト */
  scoutedFromMine?: boolean | undefined
  /** 会社が送ったスカウト */
  scoutedFromOrganizational?: boolean | undefined
  /** キーワード検索 */
  keyword?: string | undefined
  /** アクセス日時が新しい順 */
  sortAscLastSignInAt?: boolean | undefined
  /** プロフィール更新日時が新しい順 */
  sortAscProfileUpdatedAt?: boolean | undefined
  /** pagenationのpageナンバー */
  page?: number | undefined
}

export const getCompaniesCompanyIdKeepingListsKeepingListIdAccounts = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdKeepingListsKeepingListIdAccountsResponse,
  GetCompaniesCompanyIdKeepingListsKeepingListIdAccountsUrlParams,
  GetCompaniesCompanyIdKeepingListsKeepingListIdAccountsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/keeping_lists/:keepingListId/accounts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
