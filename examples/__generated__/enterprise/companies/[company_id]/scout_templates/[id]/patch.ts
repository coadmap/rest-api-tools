/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdScoutTemplatesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdScoutTemplatesIdResponse = Types.ScoutTemplateRes

export type PatchCompaniesCompanyIdScoutTemplatesIdRequestBody = {
  scoutTemplate: {
    name?: string | undefined
    title?: string | undefined
    content?: string | undefined
    scope?: 'mine' | 'organizational' | undefined
    category?: 'career' | 'project' | 'career_remainder' | 'project_remainder' | undefined
    position?: number | undefined
  }
}

export const patchCompaniesCompanyIdScoutTemplatesId = new BaseRequest<
  PatchCompaniesCompanyIdScoutTemplatesIdRequestBody,
  PatchCompaniesCompanyIdScoutTemplatesIdResponse,
  PatchCompaniesCompanyIdScoutTemplatesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/scout_templates/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
