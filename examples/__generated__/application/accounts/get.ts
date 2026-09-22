/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetAccountsResponse = Types.AccountsRes

export const getAccounts = new BaseRequest<
  undefined,
  GetAccountsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
