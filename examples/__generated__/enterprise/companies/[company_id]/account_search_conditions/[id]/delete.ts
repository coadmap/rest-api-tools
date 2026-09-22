/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type DeleteCompaniesCompanyIdAccountSearchConditionsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdAccountSearchConditionsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdAccountSearchConditionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/account_search_conditions/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
