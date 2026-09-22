/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdApplicantResourcesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdApplicantResourcesIdResponse = Types.ApplicantResourceRes

export const getCompaniesCompanyIdApplicantResourcesId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdApplicantResourcesIdResponse,
  GetCompaniesCompanyIdApplicantResourcesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/applicant_resources/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
