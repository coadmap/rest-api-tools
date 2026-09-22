/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdWithdrawalBalanceUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdWithdrawalBalanceResponse = {
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

export const getCompaniesCompanyIdWithdrawalBalance = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdWithdrawalBalanceResponse,
  GetCompaniesCompanyIdWithdrawalBalanceUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/withdrawal_balance",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
