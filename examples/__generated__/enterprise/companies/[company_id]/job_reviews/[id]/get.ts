/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdWorkReviewsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdWorkReviewsIdResponse = Types.JobReviewRes

export const getCompaniesCompanyIdWorkReviewsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdWorkReviewsIdResponse,
  GetCompaniesCompanyIdWorkReviewsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/job_reviews/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
