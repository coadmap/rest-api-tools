/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type DeleteCompaniesCompanyIdJobOrdersJobOrderIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdJobOrdersJobOrderId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdJobOrdersJobOrderIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/job_orders/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
