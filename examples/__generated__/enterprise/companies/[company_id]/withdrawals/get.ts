/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdWithdrawalsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdWithdrawalsResponse = Types.WithdrawalsRes

export const getCompaniesCompanyIdWithdrawals = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdWithdrawalsResponse,
  GetCompaniesCompanyIdWithdrawalsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/withdrawals",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
