/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdIdentificationUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdIdentificationResponse = {
  identificationUrl: string
}

export const getAccountsAccountIdIdentification = new BaseRequest<
  undefined,
  GetAccountsAccountIdIdentificationResponse,
  GetAccountsAccountIdIdentificationUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/identification",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
