/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdApplicantsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdApplicantsResponse = Types.ApplicantsRes

export type GetAccountsAccountIdApplicantsQueryParams = {
  page?: number | undefined
}

export const getAccountsAccountIdApplicants = new BaseRequest<
  undefined,
  GetAccountsAccountIdApplicantsResponse,
  GetAccountsAccountIdApplicantsUrlParams,
  GetAccountsAccountIdApplicantsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/applicants",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
