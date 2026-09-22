/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdWorkHistoriesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdWorkHistoriesResponse = Types.WorkHistoriesRes

export type PostAccountsAccountIdWorkHistoriesRequestBody = {
  workHistory: {
    /** 「在職中」「離職中」 */
    isEmployed: boolean
    position: string
    sinceDate: string
    untilDate?: string | undefined
    name: string
    department: string
  }
}

export const postAccountsAccountIdWorkHistories = new BaseRequest<
  PostAccountsAccountIdWorkHistoriesRequestBody,
  PostAccountsAccountIdWorkHistoriesResponse,
  PostAccountsAccountIdWorkHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/work_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
