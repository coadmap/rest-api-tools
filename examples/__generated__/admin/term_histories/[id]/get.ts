/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetTermHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetTermHistoriesIdResponse = Types.TermHistoryRes

export const getTermHistoriesId = new BaseRequest<
  undefined,
  GetTermHistoriesIdResponse,
  GetTermHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/term_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
