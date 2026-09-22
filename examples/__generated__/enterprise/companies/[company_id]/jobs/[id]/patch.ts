/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdJobsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdJobsIdResponse = Types.JobRes

export type PatchCompaniesCompanyIdJobsIdRequestBody = {
  job: {
    status?: 'in_progress' | 'completed' | undefined
    principalOrgUnitIds?: string[] | undefined
  }
}

export const patchCompaniesCompanyIdJobsId = new BaseRequest<
  PatchCompaniesCompanyIdJobsIdRequestBody,
  PatchCompaniesCompanyIdJobsIdResponse,
  PatchCompaniesCompanyIdJobsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/jobs/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
