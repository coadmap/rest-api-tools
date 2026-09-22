/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../../shared/index";
import { API_HOST } from "../../../../../../urls";

export type PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsMoveUrlParams = {
  companyId: string
  keepingListId: string
} | undefined

export type PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsMoveRequestBody = {
  keepingList: {
    accountIds: string[]
    targetKeepingListIds: string[]
  }
}

export const postCompaniesCompanyIdKeepingListsKeepingListIdAccountsMove = new BaseRequest<
  PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsMoveRequestBody,
  undefined,
  PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsMoveUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/keeping_lists/:keepingListId/accounts/move",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
