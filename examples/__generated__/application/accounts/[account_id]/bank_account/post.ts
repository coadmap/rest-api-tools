/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdBankAccountUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdBankAccountResponse = Types.BankAccountRes

export type PostAccountsAccountIdBankAccountRequestBody = {
  bankAccount: {
    bankName: string
    branchName: string
    accountNumber: string
    accountHolderName: string
    bankCode: string
    branchCode: string
  }
}

export const postAccountsAccountIdBankAccount = new BaseRequest<
  PostAccountsAccountIdBankAccountRequestBody,
  PostAccountsAccountIdBankAccountResponse,
  PostAccountsAccountIdBankAccountUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/bank_account",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
