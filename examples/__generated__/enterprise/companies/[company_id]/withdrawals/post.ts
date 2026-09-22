/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdWithdrawalsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdWithdrawalsResponse = Types.WithdrawalRes

export type PostCompaniesCompanyIdWithdrawalsRequestBody = {
  withdrawal: {
    amount: number
  }
}

export const postCompaniesCompanyIdWithdrawals = new BaseRequest<
  PostCompaniesCompanyIdWithdrawalsRequestBody,
  PostCompaniesCompanyIdWithdrawalsResponse,
  PostCompaniesCompanyIdWithdrawalsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/withdrawals",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
