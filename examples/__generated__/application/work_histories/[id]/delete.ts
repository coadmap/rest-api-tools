/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteWorkHistoriesIdUrlParams = {
  id: string
} | undefined

export const deleteWorkHistoriesId = new BaseRequest<
  undefined,
  undefined,
  DeleteWorkHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/work_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
