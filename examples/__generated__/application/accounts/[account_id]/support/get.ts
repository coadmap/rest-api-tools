/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdSupportUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdSupportResponse = Types.SupportRes

export const getAccountsAccountIdSupport = new BaseRequest<
  undefined,
  GetAccountsAccountIdSupportResponse,
  GetAccountsAccountIdSupportUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/support",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
