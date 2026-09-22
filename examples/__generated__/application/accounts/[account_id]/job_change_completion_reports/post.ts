/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdCompletionReportsUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdCompletionReportsResponse = Types.JobChangeCompletionReportRes

export type PostAccountsAccountIdCompletionReportsRequestBody = {
  jobChangeCompletionReport: {
    amount: number
    companyId: string
  }
}

export const postAccountsAccountIdCompletionReports = new BaseRequest<
  PostAccountsAccountIdCompletionReportsRequestBody,
  PostAccountsAccountIdCompletionReportsResponse,
  PostAccountsAccountIdCompletionReportsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/job_change_completion_reports",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
