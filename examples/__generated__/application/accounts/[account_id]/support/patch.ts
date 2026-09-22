/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PatchAccountsAccountIdSupportUrlParams = {
  accountId: string
} | undefined

export type PatchAccountsAccountIdSupportResponse = Types.SupportRes

export type PatchAccountsAccountIdSupportRequestBody = {
  support: {
    project?: boolean | undefined
    career?: boolean | undefined
  }
}

export const patchAccountsAccountIdSupport = new BaseRequest<
  PatchAccountsAccountIdSupportRequestBody,
  PatchAccountsAccountIdSupportResponse,
  PatchAccountsAccountIdSupportUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/accounts/:accountId/support",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
