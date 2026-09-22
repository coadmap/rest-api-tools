/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesIdScoutedAccountsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesIdScoutedAccountsResponse = Types.AccountsRes

export type GetCompaniesIdScoutedAccountsQueryParams = {
  /** キーワード */
  keyword?: string | undefined
  /** 開封済み・未開封 */
  isOpened?: boolean | undefined
  /** 返信あり */
  isReplied?: boolean | undefined
  /** 自分が送ったスカウト */
  fromMine?: boolean | undefined
  /** スカウト一覧の並び替え */
  sortBy?: 'from_mine_scouted_at' | 'scouted_at' | 'accessed_at' | 'updated_at' | undefined
  /** pagenationのpageナンバー */
  page?: number | undefined
}

export const getCompaniesIdScoutedAccounts = new BaseRequest<
  undefined,
  GetCompaniesIdScoutedAccountsResponse,
  GetCompaniesIdScoutedAccountsUrlParams,
  GetCompaniesIdScoutedAccountsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/scouted_accounts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
