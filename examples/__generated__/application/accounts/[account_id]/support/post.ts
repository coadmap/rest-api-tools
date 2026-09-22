/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdSupportUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdSupportResponse = Types.SupportRes

export type PostAccountsAccountIdSupportRequestBody = {
  support: {
    project: boolean
    career: boolean
  }
}

export const postAccountsAccountIdSupport = new BaseRequest<
  PostAccountsAccountIdSupportRequestBody,
  PostAccountsAccountIdSupportResponse,
  PostAccountsAccountIdSupportUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/support",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
