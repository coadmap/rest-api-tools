/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdAccountsArchiveUrlParams = {
  companyId: string
} | undefined

export type PatchCompaniesCompanyIdAccountsArchiveResponse = Types.AccountsRes

export type PatchCompaniesCompanyIdAccountsArchiveRequestBody = {
  accountIds: string[]
  isArchived: boolean
}

export const patchCompaniesCompanyIdAccountsArchive = new BaseRequest<
  PatchCompaniesCompanyIdAccountsArchiveRequestBody,
  PatchCompaniesCompanyIdAccountsArchiveResponse,
  PatchCompaniesCompanyIdAccountsArchiveUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/accounts/archive",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
