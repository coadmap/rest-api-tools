/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchWorkHistoriesIdUrlParams = {
  id: string
} | undefined

export type PatchWorkHistoriesIdResponse = Types.WorkHistoriesRes

export type PatchWorkHistoriesIdRequestBody = {
  workHistory: {
    /** 「在職中」「離職中」 */
    isEmployed?: boolean | undefined
    position?: string | undefined
    sinceDate?: string | undefined
    untilDate?: string | undefined
    name?: string | undefined
    department?: string | undefined
  }
}

export const patchWorkHistoriesId = new BaseRequest<
  PatchWorkHistoriesIdRequestBody,
  PatchWorkHistoriesIdResponse,
  PatchWorkHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/work_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
