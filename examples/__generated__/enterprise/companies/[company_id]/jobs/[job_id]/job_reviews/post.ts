/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type PostCompaniesCompanyIdJobsJobIdJobReviewsUrlParams = {
  companyId: string
  jobId: string
} | undefined

export type PostCompaniesCompanyIdJobsJobIdJobReviewsResponse = Types.JobReviewRes

export type PostCompaniesCompanyIdJobsJobIdJobReviewsRequestBody = {
  jobReview: {
    starRating: number
    /** 文字列で渡して、Skill側でfind_or_create_byする */
    skills: string[]
    /** スキルの詳細 */
    skillDescription: string
    /** もっとこうして欲しかった点 */
    improvementPoint: string
  }
}

export const postCompaniesCompanyIdJobsJobIdJobReviews = new BaseRequest<
  PostCompaniesCompanyIdJobsJobIdJobReviewsRequestBody,
  PostCompaniesCompanyIdJobsJobIdJobReviewsResponse,
  PostCompaniesCompanyIdJobsJobIdJobReviewsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/jobs/:jobId/job_reviews",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
