/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdIncomeHistoriesUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdIncomeHistoriesResponse = Types.IncomeHistoriesRes

export const getCompaniesCompanyIdIncomeHistories = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdIncomeHistoriesResponse,
  GetCompaniesCompanyIdIncomeHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/income_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
