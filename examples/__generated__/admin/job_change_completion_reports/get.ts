/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetJobChangeCompletionReportsResponse = Types.JobChangeCompletionReportsRes

export type GetJobChangeCompletionReportsQueryParams = {
}

export const getJobChangeCompletionReports = new BaseRequest<
  undefined,
  GetJobChangeCompletionReportsResponse,
  undefined,
  GetJobChangeCompletionReportsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/job_change_completion_reports",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
