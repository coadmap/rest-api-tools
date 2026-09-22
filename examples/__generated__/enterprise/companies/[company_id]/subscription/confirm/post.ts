/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostCompaniesCompanyIdSubscriptionConfirmUrlParams = {
  companyId: string
} | undefined

export const postCompaniesCompanyIdSubscriptionConfirm = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdSubscriptionConfirmUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/subscription/confirm",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
