/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetAccountsAccountIdProfileSpecialtyCompanyTypesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdProfileSpecialtyCompanyTypesResponse = Types.SpecialtyCompanyTypesRes

export const getAccountsAccountIdProfileSpecialtyCompanyTypes = new BaseRequest<
  undefined,
  GetAccountsAccountIdProfileSpecialtyCompanyTypesResponse,
  GetAccountsAccountIdProfileSpecialtyCompanyTypesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/agent_profile/specialty_company_types",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
