/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetAcademicHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetAcademicHistoriesIdResponse = Types.AcademicHistoryRes

export const getAcademicHistoriesId = new BaseRequest<
  undefined,
  GetAcademicHistoriesIdResponse,
  GetAcademicHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/academic_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
