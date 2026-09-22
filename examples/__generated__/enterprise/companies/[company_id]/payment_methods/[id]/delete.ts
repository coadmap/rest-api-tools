/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type DeleteCompaniesCompanyIdPaymentMethodsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdPaymentMethodsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdPaymentMethodsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/payment_methods/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
