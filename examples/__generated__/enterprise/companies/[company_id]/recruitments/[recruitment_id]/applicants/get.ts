/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type GetCompaniesCompanyIdRecruitmentsRecruitmentIdApplicantsUrlParams = {
  companyId: string
  recruitmentId: string
} | undefined

export type GetCompaniesCompanyIdRecruitmentsRecruitmentIdApplicantsResponse = Types.ApplicantsRes

export type GetCompaniesCompanyIdRecruitmentsRecruitmentIdApplicantsQueryParams = {
  /** 職種絞り込み */
  occupationId?: string | undefined
  /** 募集絞り込み */
  recruitmentId?: string | undefined
}

export const getCompaniesCompanyIdRecruitmentsRecruitmentIdApplicants = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRecruitmentsRecruitmentIdApplicantsResponse,
  GetCompaniesCompanyIdRecruitmentsRecruitmentIdApplicantsUrlParams,
  GetCompaniesCompanyIdRecruitmentsRecruitmentIdApplicantsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/recruitments/:recruitmentId/applicants",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
