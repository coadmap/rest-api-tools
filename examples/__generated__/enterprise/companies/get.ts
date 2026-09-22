/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetCompaniesResponse = Types.CompaniesRes

export const getCompanies = new BaseRequest<
  undefined,
  GetCompaniesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
