/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetCompaniesResponse = Types.CompaniesRes

export type GetCompaniesQueryParams = {
  /** 検索キーワード */
  keyword?: string | undefined
  /** ページ */
  page?: number | undefined
}

export const getCompanies = new BaseRequest<
  undefined,
  GetCompaniesResponse,
  undefined,
  GetCompaniesQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/companies",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
