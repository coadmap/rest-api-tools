/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdSubscriptionsIdUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdSubscriptionsIdResponse = Types.SubscriptionRes

export type PostCompaniesCompanyIdSubscriptionsIdRequestBody = {
  subscription: {
    priceId: string
  }
}

export const postCompaniesCompanyIdSubscriptionsId = new BaseRequest<
  PostCompaniesCompanyIdSubscriptionsIdRequestBody,
  PostCompaniesCompanyIdSubscriptionsIdResponse,
  PostCompaniesCompanyIdSubscriptionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/subscription",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
