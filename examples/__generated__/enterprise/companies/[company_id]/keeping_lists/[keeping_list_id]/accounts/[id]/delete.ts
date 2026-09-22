/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../../shared/index";
import { API_HOST } from "../../../../../../urls";

export type DeleteCompaniesCompanyIdKeepingListsKeepingListIdAccountsIdUrlParams = {
  companyId: string
  keepingListId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdKeepingListsKeepingListIdAccountsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdKeepingListsKeepingListIdAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/keeping_lists/:keepingListId/accounts/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
