/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteIndustryHistoriesIdUrlParams = {
  id: string
} | undefined

export const deleteIndustryHistoriesId = new BaseRequest<
  undefined,
  undefined,
  DeleteIndustryHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/industry_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
