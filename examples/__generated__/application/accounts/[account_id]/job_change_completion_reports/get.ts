/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdJobChangeCompletionReportsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdJobChangeCompletionReportsResponse = Types.JobChangeCompletionReportsRes

export const getAccountsAccountIdJobChangeCompletionReports = new BaseRequest<
  undefined,
  GetAccountsAccountIdJobChangeCompletionReportsResponse,
  GetAccountsAccountIdJobChangeCompletionReportsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/job_change_completion_reports",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
