/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetOccupationHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetOccupationHistoriesIdResponse = Types.OccupationHistoryRes

export const getOccupationHistoriesId = new BaseRequest<
  undefined,
  GetOccupationHistoriesIdResponse,
  GetOccupationHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/occupation_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
