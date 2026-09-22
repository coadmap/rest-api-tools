/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetJobsJobIdJobReviewsUrlParams = {
  jobId: string
} | undefined

export type GetJobsJobIdJobReviewsResponse = Types.JobReviewsRes

export type GetJobsJobIdJobReviewsQueryParams = {
  page?: number | undefined
}

export const getJobsJobIdJobReviews = new BaseRequest<
  undefined,
  GetJobsJobIdJobReviewsResponse,
  GetJobsJobIdJobReviewsUrlParams,
  GetJobsJobIdJobReviewsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/jobs/:jobId/job_reviews",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
