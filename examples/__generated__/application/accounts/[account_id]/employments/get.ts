/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdEmploymentsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdEmploymentsResponse = Types.EmploymentsRes

export const getAccountsAccountIdEmployments = new BaseRequest<
  undefined,
  GetAccountsAccountIdEmploymentsResponse,
  GetAccountsAccountIdEmploymentsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/employments",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
