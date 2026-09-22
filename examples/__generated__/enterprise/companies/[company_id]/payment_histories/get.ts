/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdPaymentHistoriesUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdPaymentHistoriesResponse = Types.PaymentHistoriesRes

export const getCompaniesCompanyIdPaymentHistories = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdPaymentHistoriesResponse,
  GetCompaniesCompanyIdPaymentHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/payment_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
