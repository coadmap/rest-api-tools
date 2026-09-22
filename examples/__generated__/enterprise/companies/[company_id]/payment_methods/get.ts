/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdPaymentMethodsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdPaymentMethodsResponse = Types.PaymentMethodsRes

export const getCompaniesCompanyIdPaymentMethods = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdPaymentMethodsResponse,
  GetCompaniesCompanyIdPaymentMethodsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/payment_methods",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
