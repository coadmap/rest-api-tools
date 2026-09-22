/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdKeepingListsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdKeepingListsResponse = Types.KeepingListRes

export type PostCompaniesCompanyIdKeepingListsRequestBody = {
  keepingList: {
    name: string
    /** 検討人材対象のアカウント */
    accountIds?: string[] | undefined
    principalOrgUnitIds?: string[] | undefined
    principalEmploymentIds?: string[] | undefined
  }
}

export const postCompaniesCompanyIdKeepingLists = new BaseRequest<
  PostCompaniesCompanyIdKeepingListsRequestBody,
  PostCompaniesCompanyIdKeepingListsResponse,
  PostCompaniesCompanyIdKeepingListsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/keeping_lists",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
