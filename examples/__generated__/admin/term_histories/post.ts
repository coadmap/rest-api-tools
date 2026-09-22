/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostTermHistoriesResponse = Types.TermHistoryRes

export type PostTermHistoriesRequestBody = {
  termHistory: {
    content?: string | undefined
    version?: string | undefined
  }
}

export const postTermHistories = new BaseRequest<
  PostTermHistoriesRequestBody,
  PostTermHistoriesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/term_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
