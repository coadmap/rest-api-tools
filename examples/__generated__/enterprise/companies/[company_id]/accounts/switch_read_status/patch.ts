/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdAccountsSwitchReadStatusUrlParams = {
  companyId: string
} | undefined

export type PatchCompaniesCompanyIdAccountsSwitchReadStatusRequestBody = {
  accountIds: string[]
  isRead?: boolean | undefined
}

export const patchCompaniesCompanyIdAccountsSwitchReadStatus = new BaseRequest<
  PatchCompaniesCompanyIdAccountsSwitchReadStatusRequestBody,
  undefined,
  PatchCompaniesCompanyIdAccountsSwitchReadStatusUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/accounts/switch_read_status",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
