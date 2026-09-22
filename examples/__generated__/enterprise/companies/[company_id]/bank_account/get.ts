/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdBankAccountUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdBankAccountResponse = Types.BankAccountRes

export const getCompaniesCompanyIdBankAccount = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdBankAccountResponse,
  GetCompaniesCompanyIdBankAccountUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/bank_account",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
