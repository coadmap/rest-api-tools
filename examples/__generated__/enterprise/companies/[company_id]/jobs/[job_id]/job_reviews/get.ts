/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type GetCompaniesCompanyIdWorksWorkIdContractReviewsUrlParams = {
  companyId: string
  jobId: string
} | undefined

export type GetCompaniesCompanyIdWorksWorkIdContractReviewsResponse = Types.JobReviewsRes

export const getCompaniesCompanyIdWorksWorkIdContractReviews = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdWorksWorkIdContractReviewsResponse,
  GetCompaniesCompanyIdWorksWorkIdContractReviewsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/jobs/:jobId/job_reviews",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
