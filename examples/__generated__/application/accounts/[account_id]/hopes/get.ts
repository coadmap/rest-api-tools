/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdHopesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdHopesResponse = Types.HopesRes

export const getAccountsAccountIdHopes = new BaseRequest<
  undefined,
  GetAccountsAccountIdHopesResponse,
  GetAccountsAccountIdHopesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/hopes",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
