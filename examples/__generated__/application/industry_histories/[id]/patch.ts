/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchIndustryHistoriesIdUrlParams = {
  id: string
} | undefined

export type PatchIndustryHistoriesIdResponse = Types.IndustryHistoryRes

export type PatchIndustryHistoriesIdRequestBody = {
  industryHistory: {
    yearOfExperience?: number | undefined
    industryId?: string | undefined
  }
}

export const patchIndustryHistoriesId = new BaseRequest<
  PatchIndustryHistoriesIdRequestBody,
  PatchIndustryHistoriesIdResponse,
  PatchIndustryHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/industry_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
