/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PatchCompaniesCompanyIdApplicantResourcesUrlParams = {
  companyId: string
} | undefined

export type PatchCompaniesCompanyIdApplicantResourcesRequestBody = {
  applicantResources: {
    id: string
    careerStatus?: 'backlog' | 'checked' | 'interviewing' | 'offered' | 'joined' | 'rejected' | undefined
    projectStatus?: 'backlog' | 'in_progress' | 'closed' | undefined
    isCheckedCareer?: boolean | undefined
    isCheckedProject?: boolean | undefined
    principalOrgUnitIds?: string[] | undefined
    principalEmploymentIds?: string[] | undefined
  }[]
}

export const patchCompaniesCompanyIdApplicantResources = new BaseRequest<
  PatchCompaniesCompanyIdApplicantResourcesRequestBody,
  undefined,
  PatchCompaniesCompanyIdApplicantResourcesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/applicant_resources",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
