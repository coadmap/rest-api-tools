/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetCitiesIdUrlParams = {
  id: string
} | undefined

export type GetCitiesIdResponse = Types.StateCategoryRes

export const getCitiesId = new BaseRequest<
  undefined,
  GetCitiesIdResponse,
  GetCitiesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/state_categories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
