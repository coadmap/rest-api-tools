/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdBlockCompaniesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdBlockCompaniesResponse = Types.CompaniesRes

export type PostAccountsAccountIdBlockCompaniesRequestBody = {
  blockCompany: {
    companyIds?: string[] | undefined
  }
}

export const postAccountsAccountIdBlockCompanies = new BaseRequest<
  PostAccountsAccountIdBlockCompaniesRequestBody,
  PostAccountsAccountIdBlockCompaniesResponse,
  PostAccountsAccountIdBlockCompaniesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/block_companies",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
