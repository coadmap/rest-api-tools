/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdProjectResultsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdProjectResultsResponse = Types.ProjectResultRes

export const getAccountsAccountIdProjectResults = new BaseRequest<
  undefined,
  GetAccountsAccountIdProjectResultsResponse,
  GetAccountsAccountIdProjectResultsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/project_result",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
