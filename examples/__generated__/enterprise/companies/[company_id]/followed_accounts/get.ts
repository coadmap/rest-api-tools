/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesIdFollowedAccountsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesIdFollowedAccountsResponse = Types.FollowedAccountsRes

export type GetCompaniesIdFollowedAccountsQueryParams = {
  /** 検索キーワード */
  keyword?: string | undefined
  /** 非表示にしたアカウント一覧 */
  isArchived?: boolean | undefined
  /** 未読or既読にしたアカウント一覧 */
  isReadAccountInterest?: boolean | undefined
  /** スカウト済みのアカウント一覧 */
  isScouted?: boolean | undefined
  /** アクセス日時が新しい順 */
  sortAscLastSignInAt?: boolean | undefined
  /** プロフィール更新日時が新しい順 */
  sortAscProfileUpdatedAt?: boolean | undefined
  /** pagenationのpageナンバー */
  page?: number | undefined
}

export const getCompaniesIdFollowedAccounts = new BaseRequest<
  undefined,
  GetCompaniesIdFollowedAccountsResponse,
  GetCompaniesIdFollowedAccountsUrlParams,
  GetCompaniesIdFollowedAccountsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/followed_accounts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
