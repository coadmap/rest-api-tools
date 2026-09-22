/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type DeleteCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedUrlParams = {
  companyId: string
  id: string
} | undefined

export type DeleteCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedResponse = Types.ScoutTemplateRes

export const deleteCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterested = new BaseRequest<
  undefined,
  DeleteCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedResponse,
  DeleteCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/scout_templates/:id/interested",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
