/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdWithdrawalsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdWithdrawalsResponse = Types.WithdrawalsRes

export type GetAccountsAccountIdWithdrawalsQueryParams = {
  page?: number | undefined
}

export const getAccountsAccountIdWithdrawals = new BaseRequest<
  undefined,
  GetAccountsAccountIdWithdrawalsResponse,
  GetAccountsAccountIdWithdrawalsUrlParams,
  GetAccountsAccountIdWithdrawalsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/withdrawals",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
