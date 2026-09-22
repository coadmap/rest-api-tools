/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams = {
  workHistoryId: string
} | undefined

export type GetWorkHistoriesWorkHistoryIdProjectHistoriesResponse = Types.ProjectHistoriesRes

export const getWorkHistoriesWorkHistoryIdProjectHistories = new BaseRequest<
  undefined,
  GetWorkHistoriesWorkHistoryIdProjectHistoriesResponse,
  GetWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/work_histories/:workHistoryId/project_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
