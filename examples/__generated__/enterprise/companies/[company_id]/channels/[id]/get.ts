/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdChannelsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdChannelsIdResponse = Types.ChannelRes

export const getCompaniesCompanyIdChannelsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdChannelsIdResponse,
  GetCompaniesCompanyIdChannelsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/channels/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
