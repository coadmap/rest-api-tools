/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdBlockCompaniesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdBlockCompaniesResponse = Types.CompaniesRes

export const getAccountsAccountIdBlockCompanies = new BaseRequest<
  undefined,
  GetAccountsAccountIdBlockCompaniesResponse,
  GetAccountsAccountIdBlockCompaniesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/block_companies",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
