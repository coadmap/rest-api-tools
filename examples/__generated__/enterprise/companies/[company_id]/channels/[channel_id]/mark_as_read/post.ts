/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type PostCompaniesCompanyIdChannelsChannelIdMarkAsReadUrlParams = {
  companyId: string
  channelId: string
} | undefined

export const postCompaniesCompanyIdChannelsChannelIdMarkAsRead = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdChannelsChannelIdMarkAsReadUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/channels/:channelId/mark_as_read",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
