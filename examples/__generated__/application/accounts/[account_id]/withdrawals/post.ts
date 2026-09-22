/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdWithdrawalsUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdWithdrawalsResponse = Types.WithdrawalRes

export type PostAccountsAccountIdWithdrawalsRequestBody = {
  withdrawal: {
    amount: number
  }
}

export const postAccountsAccountIdWithdrawals = new BaseRequest<
  PostAccountsAccountIdWithdrawalsRequestBody,
  PostAccountsAccountIdWithdrawalsResponse,
  PostAccountsAccountIdWithdrawalsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/withdrawals",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
