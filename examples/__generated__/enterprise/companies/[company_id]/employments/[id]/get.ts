/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdEmploymentsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdEmploymentsIdResponse = Types.EmploymentRes

export const getCompaniesCompanyIdEmploymentsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdEmploymentsIdResponse,
  GetCompaniesCompanyIdEmploymentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/employments/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
