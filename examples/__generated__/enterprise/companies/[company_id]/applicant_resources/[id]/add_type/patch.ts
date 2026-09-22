/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type PatchCompaniesCompanyIdApplicantResourcesIdAddUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdApplicantResourcesIdAddResponse = Types.ApplicantResourceRes

export const patchCompaniesCompanyIdApplicantResourcesIdAdd = new BaseRequest<
  undefined,
  PatchCompaniesCompanyIdApplicantResourcesIdAddResponse,
  PatchCompaniesCompanyIdApplicantResourcesIdAddUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/applicant_resources/:id/add_type",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
