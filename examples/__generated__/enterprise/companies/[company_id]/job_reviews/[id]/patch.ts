/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdWorkReviewsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdWorkReviewsIdResponse = Types.JobReviewRes

export type PatchCompaniesCompanyIdWorkReviewsIdRequestBody = {
  jobReview: {
    starRating?: number | undefined
    /** 文字列で渡して、Skill側でfind_or_create_byする */
    skills?: string[] | undefined
    /** スキルの詳細 */
    skillDescription?: string | undefined
    /** もっとこうして欲しかった点 */
    improvementPoint?: string | undefined
  }
}

export const patchCompaniesCompanyIdWorkReviewsId = new BaseRequest<
  PatchCompaniesCompanyIdWorkReviewsIdRequestBody,
  PatchCompaniesCompanyIdWorkReviewsIdResponse,
  PatchCompaniesCompanyIdWorkReviewsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/job_reviews/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
