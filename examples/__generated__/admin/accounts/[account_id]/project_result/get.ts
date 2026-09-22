/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdProjectResultUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdProjectResultResponse = Types.ProjectResultRes

export const getAccountsAccountIdProjectResult = new BaseRequest<
  undefined,
  GetAccountsAccountIdProjectResultResponse,
  GetAccountsAccountIdProjectResultUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/project_result",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
