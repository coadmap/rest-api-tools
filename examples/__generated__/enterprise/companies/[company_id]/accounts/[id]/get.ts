/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdAccountsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdAccountsIdResponse = Types.AccountRes

export const getCompaniesCompanyIdAccountsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdAccountsIdResponse,
  GetCompaniesCompanyIdAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/accounts/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
