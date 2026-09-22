/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteProjectHistoriesIdUrlParams = {
  id: string
} | undefined

export type DeleteProjectHistoriesIdResponse = Types.WorkHistoryRes

export const deleteProjectHistoriesId = new BaseRequest<
  undefined,
  DeleteProjectHistoriesIdResponse,
  DeleteProjectHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/project_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
