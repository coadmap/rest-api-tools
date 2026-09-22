/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchOccupationHistoriesIdUrlParams = {
  id: string
} | undefined

export type PatchOccupationHistoriesIdResponse = Types.OccupationHistoryRes

export type PatchOccupationHistoriesIdRequestBody = {
  occupationHistory: {
    yearOfExperience?: number | undefined
    occupationId?: string | undefined
  }
}

export const patchOccupationHistoriesId = new BaseRequest<
  PatchOccupationHistoriesIdRequestBody,
  PatchOccupationHistoriesIdResponse,
  PatchOccupationHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/occupation_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
