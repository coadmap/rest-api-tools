/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdChannelsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdChannelsResponse = Types.ChannelsRes

export type GetAccountsAccountIdChannelsQueryParams = {
  /** page */
  page?: number | undefined
}

export const getAccountsAccountIdChannels = new BaseRequest<
  undefined,
  GetAccountsAccountIdChannelsResponse,
  GetAccountsAccountIdChannelsUrlParams,
  GetAccountsAccountIdChannelsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/channels",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
