/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdPaymentMethodsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdPaymentMethodsIdResponse = Types.PaymentMethodRes

export const getCompaniesCompanyIdPaymentMethodsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdPaymentMethodsIdResponse,
  GetCompaniesCompanyIdPaymentMethodsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/payment_methods/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
