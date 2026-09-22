/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdFollowingUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdFollowingResponse = Types.CompaniesRes

export type GetAccountsAccountIdFollowingQueryParams = {
  page?: number | undefined
}

export const getAccountsAccountIdFollowing = new BaseRequest<
  undefined,
  GetAccountsAccountIdFollowingResponse,
  GetAccountsAccountIdFollowingUrlParams,
  GetAccountsAccountIdFollowingQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/followings",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
