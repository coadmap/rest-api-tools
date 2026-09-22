/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type DeleteCompaniesCompanyIdJobReviewsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdJobReviewsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdJobReviewsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/job_reviews/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
