/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdScoutsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdScoutsIdResponse = Types.ScoutRes

export const getCompaniesCompanyIdScoutsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdScoutsIdResponse,
  GetCompaniesCompanyIdScoutsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/scouts/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
