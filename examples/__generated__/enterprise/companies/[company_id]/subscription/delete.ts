/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type DeleteCompaniesCompanyIdPlanSubscriptionsIdUrlParams = {
  companyId: string
} | undefined

export const deleteCompaniesCompanyIdPlanSubscriptionsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdPlanSubscriptionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/subscription",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
