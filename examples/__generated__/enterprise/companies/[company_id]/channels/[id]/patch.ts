/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdChannelsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdChannelsIdResponse = Types.ChannelRes

export type PatchCompaniesCompanyIdChannelsIdRequestBody = {
  channel: {
    existsNotReplied?: boolean | undefined
    principalOrgUnitIds?: string[] | undefined
    principalEmploymentIds?: string[] | undefined
  }
}

export const patchCompaniesCompanyIdChannelsId = new BaseRequest<
  PatchCompaniesCompanyIdChannelsIdRequestBody,
  PatchCompaniesCompanyIdChannelsIdResponse,
  PatchCompaniesCompanyIdChannelsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/channels/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
