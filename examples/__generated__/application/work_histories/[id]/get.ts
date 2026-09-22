/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetWorkHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetWorkHistoriesIdResponse = Types.WorkHistoryRes

export const getWorkHistoriesId = new BaseRequest<
  undefined,
  GetWorkHistoriesIdResponse,
  GetWorkHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/work_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
