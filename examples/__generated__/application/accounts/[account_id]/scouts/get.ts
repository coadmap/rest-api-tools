/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdScoutsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdScoutsResponse = Types.ScoutsRes

export type GetAccountsAccountIdScoutsQueryParams = {
  /** page */
  page?: number | undefined
  /** スカウト種別 */
  type?: 'careerScout' | 'projectScout' | undefined
  /** スカウト送信者 */
  senderType?: 'basic' | 'agent' | undefined
  /** 下書き */
  isDraft?: boolean | undefined
  /** ゴミ箱 */
  isArchived?: boolean | undefined
  /** 添付求人あり */
  withRecruitment?: boolean | undefined
  /** 開封済み・未開封 */
  isOpened?: boolean | undefined
  /** 返信済み */
  isReplied?: boolean | undefined
  /** 重要 */
  isChecked?: boolean | undefined
  /** キーワード */
  keyword?: string | undefined
}

export const getAccountsAccountIdScouts = new BaseRequest<
  undefined,
  GetAccountsAccountIdScoutsResponse,
  GetAccountsAccountIdScoutsUrlParams,
  GetAccountsAccountIdScoutsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/scouts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
