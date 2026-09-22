/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type PatchCompaniesCompanyIdScoutTemplatesIdInterestedUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdScoutTemplatesIdInterestedRequestBody = {
  scoutTemplate: {
    position: number
  }
}

export const patchCompaniesCompanyIdScoutTemplatesIdInterested = new BaseRequest<
  PatchCompaniesCompanyIdScoutTemplatesIdInterestedRequestBody,
  undefined,
  PatchCompaniesCompanyIdScoutTemplatesIdInterestedUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/scout_templates/:id/interested",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
