/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdJobOrdersJobOrderIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdJobOrdersJobOrderIdResponse = Types.JobOrderRes

export const getCompaniesCompanyIdJobOrdersJobOrderId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdJobOrdersJobOrderIdResponse,
  GetCompaniesCompanyIdJobOrdersJobOrderIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/job_orders/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
