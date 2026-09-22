/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams = {
  workHistoryId: string
} | undefined

export type PostWorkHistoriesWorkHistoryIdProjectHistoriesResponse = Types.ProjectHistoryRes

export type PostWorkHistoriesWorkHistoryIdProjectHistoriesRequestBody =   /** name・positionどちらかは必須 */
{
  projectHistory: {
    name?: string | undefined
    position?: string | undefined
    businessContent?: string | undefined
    sinceDate: string
    untilDate?: string | undefined
    isEmployed: boolean
  }
}

export const postWorkHistoriesWorkHistoryIdProjectHistories = new BaseRequest<
  PostWorkHistoriesWorkHistoryIdProjectHistoriesRequestBody,
  PostWorkHistoriesWorkHistoryIdProjectHistoriesResponse,
  PostWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/work_histories/:workHistoryId/project_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
