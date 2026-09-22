/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchProjectHistoriesIdUrlParams = {
  id: string
} | undefined

export type PatchProjectHistoriesIdResponse = Types.WorkHistoryRes

export type PatchProjectHistoriesIdRequestBody =   /** name・positionどちらかは必須 */
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

export const patchProjectHistoriesId = new BaseRequest<
  PatchProjectHistoriesIdRequestBody,
  PatchProjectHistoriesIdResponse,
  PatchProjectHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/project_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
