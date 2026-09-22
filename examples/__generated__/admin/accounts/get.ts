/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetAccountsResponse = Types.AccountsRes

export type GetAccountsQueryParams = {
  /** applicantを指定すると、応募者のアカウント一覧を取得する agentを指定すると、エージェントのアカウント一覧を取得する */
  type?: 'applicant' | 'agent' | undefined
  /** アカウントのID、名前、emailで検索 */
  keyword?: string | undefined
  /** admin審査状態 */
  adminVerificationStatus?: 'pending' | 'requested' | 'verified' | 'rejected' | 'canceled' | 'deleted' | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscLastSignInAt?: boolean | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscAccountCreatedAt?: boolean | undefined
  page?: number | undefined
  /** 会社名で検索 */
  companyName?: string | undefined
}

export const getAccounts = new BaseRequest<
  undefined,
  GetAccountsResponse,
  undefined,
  GetAccountsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
