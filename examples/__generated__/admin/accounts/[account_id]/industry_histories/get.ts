/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdIndustryHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdIndustryHistoriesResponse = Types.IndustryHistoriesRes

export const getAccountsAccountIdIndustryHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdIndustryHistoriesResponse,
  GetAccountsAccountIdIndustryHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/industry_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
