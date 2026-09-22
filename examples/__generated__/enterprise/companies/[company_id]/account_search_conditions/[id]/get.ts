/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdAccountSearchConditionsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdAccountSearchConditionsIdResponse = Types.AccountSearchConditionRes

export const getCompaniesCompanyIdAccountSearchConditionsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdAccountSearchConditionsIdResponse,
  GetCompaniesCompanyIdAccountSearchConditionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/account_search_conditions/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
