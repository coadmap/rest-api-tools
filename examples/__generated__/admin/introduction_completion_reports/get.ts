/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetIntroductionCompletionReportsResponse = Types.IntroductionCompletionReportsRes

export type GetIntroductionCompletionReportsQueryParams = {
}

export const getIntroductionCompletionReports = new BaseRequest<
  undefined,
  GetIntroductionCompletionReportsResponse,
  undefined,
  GetIntroductionCompletionReportsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/introduction_completion_reports",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
