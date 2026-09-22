/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetJobChangeCompletionReportsIdUrlParams = {
  id: string
} | undefined

export type GetJobChangeCompletionReportsIdResponse = Types.JobChangeCompletionReportRes

export const getJobChangeCompletionReportsId = new BaseRequest<
  undefined,
  GetJobChangeCompletionReportsIdResponse,
  GetJobChangeCompletionReportsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/job_change_completion_reports/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
