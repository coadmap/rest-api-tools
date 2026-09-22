/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdOrgUnitsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdOrgUnitsResponse = Types.OrgUnitsRes

export type GetCompaniesCompanyIdOrgUnitsQueryParams = {
  /** キーワード */
  keyword?: string | undefined
  /** ルート企業除く */
  exceptRoot?: boolean | undefined
}

export const getCompaniesCompanyIdOrgUnits = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdOrgUnitsResponse,
  GetCompaniesCompanyIdOrgUnitsUrlParams,
  GetCompaniesCompanyIdOrgUnitsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/org_units",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
