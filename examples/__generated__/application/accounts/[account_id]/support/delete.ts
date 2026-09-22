/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type DeleteAccountsAccountIdSupportUrlParams = {
  accountId: string
} | undefined

export const deleteAccountsAccountIdSupport = new BaseRequest<
  undefined,
  undefined,
  DeleteAccountsAccountIdSupportUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/accounts/:accountId/support",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
