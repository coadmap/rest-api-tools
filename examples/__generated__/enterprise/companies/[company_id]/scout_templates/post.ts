/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdScoutTemplatesUrlParams = {
  companyId: string
  page?: number | undefined
} | undefined

export type PostCompaniesCompanyIdScoutTemplatesResponse = Types.ScoutTemplateRes

export type PostCompaniesCompanyIdScoutTemplatesRequestBody = {
  scoutTemplate: {
    name: string
    title?: string | undefined
    content: string
    creatorId?: string | undefined
    scope?: 'mine' | 'organizational' | undefined
    category?: 'career' | 'project' | 'career_remainder' | 'project_remainder' | undefined
  }
}

export const postCompaniesCompanyIdScoutTemplates = new BaseRequest<
  PostCompaniesCompanyIdScoutTemplatesRequestBody,
  PostCompaniesCompanyIdScoutTemplatesResponse,
  PostCompaniesCompanyIdScoutTemplatesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/scout_templates",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
