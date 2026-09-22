/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetRecruitmentCompletionReportsResponse = Types.RecruitmentCompletionReportsRes

export const getRecruitmentCompletionReports = new BaseRequest<
  undefined,
  GetRecruitmentCompletionReportsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/recruitment_completion_reports",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
