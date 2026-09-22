/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type DeleteCompaniesCompanyIdBankAccountUrlParams = {
  companyId: string
} | undefined

export const deleteCompaniesCompanyIdBankAccount = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdBankAccountUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/bank_account",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
