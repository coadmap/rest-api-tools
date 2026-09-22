/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdApplicantsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdApplicantsIdResponse = Types.ApplicantRes

export const getCompaniesCompanyIdApplicantsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdApplicantsIdResponse,
  GetCompaniesCompanyIdApplicantsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/applicants/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
