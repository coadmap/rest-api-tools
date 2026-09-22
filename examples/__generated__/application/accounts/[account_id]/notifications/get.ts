/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdNotificationsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdNotificationsResponse = Types.NotificationsRes

export type GetAccountsAccountIdNotificationsQueryParams = {
  notificationType?: 'general' | 'message' | undefined
  isRead?: boolean | undefined
  page?: number | undefined
}

export const getAccountsAccountIdNotifications = new BaseRequest<
  undefined,
  GetAccountsAccountIdNotificationsResponse,
  GetAccountsAccountIdNotificationsUrlParams,
  GetAccountsAccountIdNotificationsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/notifications",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
