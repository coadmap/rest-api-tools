/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdScoutsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdScoutsResponse = Types.ScoutsRes

export type GetCompaniesCompanyIdScoutsQueryParams = {
  /** page */
  page?: number | undefined
}

export const getCompaniesCompanyIdScouts = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdScoutsResponse,
  GetCompaniesCompanyIdScoutsUrlParams,
  GetCompaniesCompanyIdScoutsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/scouts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
