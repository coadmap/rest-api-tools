/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetScoutsIdUrlParams = {
  id: string
} | undefined

export type GetScoutsIdResponse = Types.ScoutRes

export const getScoutsId = new BaseRequest<
  undefined,
  GetScoutsIdResponse,
  GetScoutsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/scouts/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
