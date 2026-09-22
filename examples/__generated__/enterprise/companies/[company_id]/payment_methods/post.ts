/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdPaymentMethodsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdPaymentMethodsResponse = Types.PaymentMethodRes

export type PostCompaniesCompanyIdPaymentMethodsRequestBody = {
  paymentMethod: {
    /** Stripeのpayment_method_id */
    stripePmId: string
    isDefault: boolean
  }
}

export const postCompaniesCompanyIdPaymentMethods = new BaseRequest<
  PostCompaniesCompanyIdPaymentMethodsRequestBody,
  PostCompaniesCompanyIdPaymentMethodsResponse,
  PostCompaniesCompanyIdPaymentMethodsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/payment_methods",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
