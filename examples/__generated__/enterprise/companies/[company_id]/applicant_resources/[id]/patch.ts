/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdApplicantStatusesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdApplicantStatusesIdResponse = Types.ApplicantResourceRes

export type PatchCompaniesCompanyIdApplicantStatusesIdRequestBody = {
  applicantResource: {
    careerStatus?: 'backlog' | 'checked' | 'interviewing' | 'offered' | 'joined' | 'rejected' | undefined
    projectStatus?: 'backlog' | 'in_progress' | 'closed' | undefined
    isCheckedCareer?: boolean | undefined
    isCheckedProject?: boolean | undefined
    isWatchedCareer?: boolean | undefined
    isWatchedProject?: boolean | undefined
    principalOrgUnitIds?: string[] | undefined
    principalEmploymentIds?: string[] | undefined
  }
}

export const patchCompaniesCompanyIdApplicantStatusesId = new BaseRequest<
  PatchCompaniesCompanyIdApplicantStatusesIdRequestBody,
  PatchCompaniesCompanyIdApplicantStatusesIdResponse,
  PatchCompaniesCompanyIdApplicantStatusesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/applicant_resources/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
