/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetTermHistoriesLatestResponse = Types.TermHistory

export type GetTermHistoriesLatestQueryParams = {
  /** "common" or "type" */
  type?: 'common' | 'plan' | undefined
}

export const getTermHistoriesLatest = new BaseRequest<
  undefined,
  GetTermHistoriesLatestResponse,
  undefined,
  GetTermHistoriesLatestQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/term_histories/latest",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
