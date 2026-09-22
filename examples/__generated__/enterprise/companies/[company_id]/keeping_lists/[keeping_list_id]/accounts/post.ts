/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsUrlParams = {
  companyId: string
  keepingListId: string
} | undefined

export type PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsRequestBody = {
  keepingList: {
    accountIds: string[]
  }
}

export const postCompaniesCompanyIdKeepingListsKeepingListIdAccounts = new BaseRequest<
  PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsRequestBody,
  undefined,
  PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/keeping_lists/:keepingListId/accounts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
