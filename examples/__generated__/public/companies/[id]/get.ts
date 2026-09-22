/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetCompaniesIdUrlParams = {
  id: string
} | undefined

export type GetCompaniesIdResponse = Types.CompanyRes

export const getCompaniesId = new BaseRequest<
  undefined,
  GetCompaniesIdResponse,
  GetCompaniesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
