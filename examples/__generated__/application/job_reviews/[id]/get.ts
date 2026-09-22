/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetJobReviewsIdUrlParams = {
  id: string
} | undefined

export type GetJobReviewsIdResponse = Types.JobReviewRes

export const getJobReviewsId = new BaseRequest<
  undefined,
  GetJobReviewsIdResponse,
  GetJobReviewsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/job_reviews/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
