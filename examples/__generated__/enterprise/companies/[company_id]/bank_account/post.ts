/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdBankAccountUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdBankAccountResponse = Types.BankAccountRes

export type PostCompaniesCompanyIdBankAccountRequestBody = {
  bankAccount: {
    bankName: string
    branchName: string
    accountNumber: string
    accountHolderName: string
    bankCode: string
    branchCode: string
  }
}

export const postCompaniesCompanyIdBankAccount = new BaseRequest<
  PostCompaniesCompanyIdBankAccountRequestBody,
  PostCompaniesCompanyIdBankAccountResponse,
  PostCompaniesCompanyIdBankAccountUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/bank_account",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
