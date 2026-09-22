/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdPlanSubscriptionsIdUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdPlanSubscriptionsIdResponse = Types.SubscriptionRes

export const getCompaniesCompanyIdPlanSubscriptionsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdPlanSubscriptionsIdResponse,
  GetCompaniesCompanyIdPlanSubscriptionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/subscription",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
