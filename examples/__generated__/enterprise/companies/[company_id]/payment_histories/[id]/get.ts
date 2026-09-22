/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdPaymentHistoriesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdPaymentHistoriesIdResponse = Types.PaymentHistoryRes

export const getCompaniesCompanyIdPaymentHistoriesId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdPaymentHistoriesIdResponse,
  GetCompaniesCompanyIdPaymentHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/payment_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
