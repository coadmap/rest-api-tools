/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdMessagesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdMessagesResponse = Types.MessagesRes

export type GetAccountsAccountIdMessagesQueryParams = {
  companyId: string
  page?: number | undefined
}

export const getAccountsAccountIdMessages = new BaseRequest<
  undefined,
  GetAccountsAccountIdMessagesResponse,
  GetAccountsAccountIdMessagesUrlParams,
  GetAccountsAccountIdMessagesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/messages",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
