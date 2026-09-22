/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetCompaniesResponse = Types.CompaniesRes

export type GetCompaniesQueryParams = {
  /** 検索キーワード */
  keyword?: string | undefined
  /** stubを渡せばstub企業を含めた全企業一覧取得に */
  type?: 'stub' | undefined
  /** 発注に紐付いた募集のみ（発注のフィルター用） */
  isJobOrdered?: boolean | undefined
  /** 業務に紐付いた募集のみ（業務のフィルター用） */
  isJobed?: boolean | undefined
  page?: number | undefined
}

export const getCompanies = new BaseRequest<
  undefined,
  GetCompaniesResponse,
  undefined,
  GetCompaniesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
