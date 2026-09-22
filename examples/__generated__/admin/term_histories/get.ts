/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetTermHistoriesResponse = Types.TermHistoriesRes

export type GetTermHistoriesQueryParams = {
  type?: 'common' | 'plan' | undefined
}

export const getTermHistories = new BaseRequest<
  undefined,
  GetTermHistoriesResponse,
  undefined,
  GetTermHistoriesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/term_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
