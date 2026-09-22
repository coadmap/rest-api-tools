/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type DeleteCompaniesCompanyIdKeepingListsKeepingListIdAccountsUrlParams = {
  companyId: string
  keepingListId: string
} | undefined

export type DeleteCompaniesCompanyIdKeepingListsKeepingListIdAccountsRequestBody = {
  keepingList: {
    accountIds: string[]
  }
}

export const deleteCompaniesCompanyIdKeepingListsKeepingListIdAccounts = new BaseRequest<
  DeleteCompaniesCompanyIdKeepingListsKeepingListIdAccountsRequestBody,
  undefined,
  DeleteCompaniesCompanyIdKeepingListsKeepingListIdAccountsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/keeping_lists/:keepingListId/accounts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
