/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type PostCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedUrlParams = {
  companyId: string
  id: string
} | undefined

export type PostCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedResponse = Types.ScoutTemplateRes

export const postCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterested = new BaseRequest<
  undefined,
  PostCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedResponse,
  PostCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/scout_templates/:id/interested",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
