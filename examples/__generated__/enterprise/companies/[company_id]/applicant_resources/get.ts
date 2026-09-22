/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdApplicantResourcesUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdApplicantResourcesResponse = Types.ApplicantResourcesRes

export type GetCompaniesCompanyIdApplicantResourcesQueryParams = {
  /** 転職ステータス */
  careerStatuses?: ('backlog' | 'checked' | 'interviewing' | 'offered' | 'joined' | 'rejected')[] | undefined
  /** 副業・フリーランスステータス */
  projectStatuses?: ('backlog' | 'in_progress' | 'closed')[] | undefined
  /** フラグ */
  isChecked?: boolean | undefined
  /** キーワード */
  keyword?: string | undefined
  /** 未返信 */
  existsNotReplied?: boolean | undefined
  /** サンプルを除外 */
  exceptSample?: boolean | undefined
  /** 論理削除されたアカウントを除外 */
  exceptDeletedAccount?: boolean | undefined
  /** 業務と紐付けられた人材のみ（業務のフィルター用） */
  isJobed?: boolean | undefined
  /** 発注と紐付けられた人材のみ（発注のフィルター用） */
  isJobOrdered?: boolean | undefined
  page?: number | undefined
}

export const getCompaniesCompanyIdApplicantResources = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdApplicantResourcesResponse,
  GetCompaniesCompanyIdApplicantResourcesUrlParams,
  GetCompaniesCompanyIdApplicantResourcesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/applicant_resources",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
