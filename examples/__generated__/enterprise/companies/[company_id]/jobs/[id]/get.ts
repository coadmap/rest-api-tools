/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdJobsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdJobsIdResponse = Types.JobRes

export const getCompaniesCompanyIdJobsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdJobsIdResponse,
  GetCompaniesCompanyIdJobsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/jobs/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
