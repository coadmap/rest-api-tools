/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdAccountSearchConditionsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdAccountSearchConditionsResponse = Types.AccountSearchConditionsRes

export type GetCompaniesCompanyIdAccountSearchConditionsQueryParams = {
}

export const getCompaniesCompanyIdAccountSearchConditions = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdAccountSearchConditionsResponse,
  GetCompaniesCompanyIdAccountSearchConditionsUrlParams,
  GetCompaniesCompanyIdAccountSearchConditionsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/account_search_conditions",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
