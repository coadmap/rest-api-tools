/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PatchCompaniesCompanyIdPlanSubscriptionsIdUrlParams = {
  companyId: string
} | undefined

export type PatchCompaniesCompanyIdPlanSubscriptionsIdResponse = Types.SubscriptionRes

export type PatchCompaniesCompanyIdPlanSubscriptionsIdRequestBody = {
  subscription: {
    priceId?: string | undefined
  }
}

export const patchCompaniesCompanyIdPlanSubscriptionsId = new BaseRequest<
  PatchCompaniesCompanyIdPlanSubscriptionsIdRequestBody,
  PatchCompaniesCompanyIdPlanSubscriptionsIdResponse,
  PatchCompaniesCompanyIdPlanSubscriptionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/subscription",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
