/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdKeepingListsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdKeepingListsIdResponse = Types.KeepingListRes

export type PatchCompaniesCompanyIdKeepingListsIdRequestBody = {
  keepingList: {
    position?: number | undefined
    name?: string | undefined
    accountIds?: string[] | undefined
    principalOrgUnitIds?: string[] | undefined
    principalEmploymentIds?: string[] | undefined
  }
}

export const patchCompaniesCompanyIdKeepingListsId = new BaseRequest<
  PatchCompaniesCompanyIdKeepingListsIdRequestBody,
  PatchCompaniesCompanyIdKeepingListsIdResponse,
  PatchCompaniesCompanyIdKeepingListsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/keeping_lists/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
