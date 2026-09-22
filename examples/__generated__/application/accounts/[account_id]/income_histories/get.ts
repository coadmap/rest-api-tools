/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdIncomeHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdIncomeHistoriesResponse = Types.IncomeHistoriesRes

export type GetAccountsAccountIdIncomeHistoriesQueryParams = {
  page?: number | undefined
}

export const getAccountsAccountIdIncomeHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdIncomeHistoriesResponse,
  GetAccountsAccountIdIncomeHistoriesUrlParams,
  GetAccountsAccountIdIncomeHistoriesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/income_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
