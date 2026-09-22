/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetCompaniesRecommendedResponse = Types.CompaniesRes

export const getCompaniesRecommended = new BaseRequest<
  undefined,
  GetCompaniesRecommendedResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/recommended",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
