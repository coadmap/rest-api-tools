/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdScoutTemplatesUrlParams = {
  companyId: string
  page?: number | undefined
} | undefined

export type GetCompaniesCompanyIdScoutTemplatesResponse = Types.ScoutTemplatesRes

export type GetCompaniesCompanyIdScoutTemplatesQueryParams = {
  /** 自分or企業全体 */
  scope?: 'mine' | 'organizational' | undefined
  /** カテゴリー */
  category?: 'career' | 'project' | 'career_remainder' | 'project_remainder' | undefined
  /** お気に入り登録 */
  isInterested?: boolean | undefined
}

export const getCompaniesCompanyIdScoutTemplates = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdScoutTemplatesResponse,
  GetCompaniesCompanyIdScoutTemplatesUrlParams,
  GetCompaniesCompanyIdScoutTemplatesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/scout_templates",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
