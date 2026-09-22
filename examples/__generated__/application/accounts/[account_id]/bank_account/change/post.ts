/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostAccountsAccountIdBankAccountChangeUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdBankAccountChangeResponse = Types.BankAccountRes

export type PostAccountsAccountIdBankAccountChangeRequestBody = {
  bankAccount: {
    bankName: string
    branchName: string
    accountNumber: string
    accountHolderName: string
    bankCode: string
    branchCode: string
  }
}

export const postAccountsAccountIdBankAccountChange = new BaseRequest<
  PostAccountsAccountIdBankAccountChangeRequestBody,
  PostAccountsAccountIdBankAccountChangeResponse,
  PostAccountsAccountIdBankAccountChangeUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/bank_account/change",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
