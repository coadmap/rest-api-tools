/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetCitiesResponse = {
  stateCategories: Types.StateCategory[]
}

export type GetCitiesQueryParams = {
  countryTypes?: string[] | undefined
}

export const getCities = new BaseRequest<
  undefined,
  GetCitiesResponse,
  undefined,
  GetCitiesQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/state_categories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
