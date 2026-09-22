/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteAcademicHistoriesIdUrlParams = {
  id: string
} | undefined

export const deleteAcademicHistoriesId = new BaseRequest<
  undefined,
  undefined,
  DeleteAcademicHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/academic_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
