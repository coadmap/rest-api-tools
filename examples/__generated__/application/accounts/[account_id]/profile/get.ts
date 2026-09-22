/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdProfileUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdProfileResponse = Types.ProfileRes

export const getAccountsAccountIdProfile = new BaseRequest<
  undefined,
  GetAccountsAccountIdProfileResponse,
  GetAccountsAccountIdProfileUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/profile",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
