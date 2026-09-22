/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdKeepingListsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdKeepingListsResponse = Types.KeepingListsRes

export type GetCompaniesCompanyIdKeepingListsQueryParams = {
  targetAccountId?: string | undefined
}

export const getCompaniesCompanyIdKeepingLists = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdKeepingListsResponse,
  GetCompaniesCompanyIdKeepingListsUrlParams,
  GetCompaniesCompanyIdKeepingListsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/keeping_lists",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
