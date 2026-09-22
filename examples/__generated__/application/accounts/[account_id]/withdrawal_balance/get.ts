/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdWithdrawalBalanceUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdWithdrawalBalanceResponse = {
  available: {
    amount: number
    currency: string
  }[]
  connectReserved: {
    amount: number
    currency: string
  }[]
  livemode: boolean
  object: string
  pending: {
    amount: number
    currency: string
  }[]
}

export const getAccountsAccountIdWithdrawalBalance = new BaseRequest<
  undefined,
  GetAccountsAccountIdWithdrawalBalanceResponse,
  GetAccountsAccountIdWithdrawalBalanceUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/withdrawal_balance",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
