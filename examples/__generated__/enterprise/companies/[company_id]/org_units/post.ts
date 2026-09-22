/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdOrgUnitsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdOrgUnitsResponse = Types.OrgUnitRes

export type PostCompaniesCompanyIdOrgUnitsRequestBody = {
  orgUnit: {
    name: string
    description?: string | undefined
    parentOrgUnitId: string
  }
}

export const postCompaniesCompanyIdOrgUnits = new BaseRequest<
  PostCompaniesCompanyIdOrgUnitsRequestBody,
  PostCompaniesCompanyIdOrgUnitsResponse,
  PostCompaniesCompanyIdOrgUnitsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/org_units",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
