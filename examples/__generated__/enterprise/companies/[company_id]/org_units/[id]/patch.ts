/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdOrgUnitsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdOrgUnitsIdResponse = Types.OrgUnitRes

export type PatchCompaniesCompanyIdOrgUnitsIdRequestBody = {
  orgUnit: {
    name?: string | undefined
    description?: string | undefined
    parentOrgUnitId?: string | undefined
  }
}

export const patchCompaniesCompanyIdOrgUnitsId = new BaseRequest<
  PatchCompaniesCompanyIdOrgUnitsIdRequestBody,
  PatchCompaniesCompanyIdOrgUnitsIdResponse,
  PatchCompaniesCompanyIdOrgUnitsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/org_units/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
