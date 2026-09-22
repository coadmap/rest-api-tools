/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdKeepingListsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdKeepingListsIdResponse = Types.KeepingListRes

export type GetCompaniesCompanyIdKeepingListsIdQueryParams = {
}

export const getCompaniesCompanyIdKeepingListsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdKeepingListsIdResponse,
  GetCompaniesCompanyIdKeepingListsIdUrlParams,
  GetCompaniesCompanyIdKeepingListsIdQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/keeping_lists/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
