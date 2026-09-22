/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostAccountsAccountIdProfileSpecialtyCompanyTypesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdProfileSpecialtyCompanyTypesResponse = Types.SpecialtyCompanyTypeRes

export type PostAccountsAccountIdProfileSpecialtyCompanyTypesRequestBody = {
  specialtyCompanyType: {
    content?: string | undefined
  }
}

export const postAccountsAccountIdProfileSpecialtyCompanyTypes = new BaseRequest<
  PostAccountsAccountIdProfileSpecialtyCompanyTypesRequestBody,
  PostAccountsAccountIdProfileSpecialtyCompanyTypesResponse,
  PostAccountsAccountIdProfileSpecialtyCompanyTypesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/agent_profile/specialty_company_types",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
