/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type GetCompaniesCompanyIdChannelsChannelIdMessagesUrlParams = {
  companyId: string
  channelId: string
} | undefined

export type GetCompaniesCompanyIdChannelsChannelIdMessagesResponse = Types.MessagesRes

export type GetCompaniesCompanyIdChannelsChannelIdMessagesQueryParams = {
  /** page */
  page?: number | undefined
  isDraft?: boolean | undefined
}

export const getCompaniesCompanyIdChannelsChannelIdMessages = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdChannelsChannelIdMessagesResponse,
  GetCompaniesCompanyIdChannelsChannelIdMessagesUrlParams,
  GetCompaniesCompanyIdChannelsChannelIdMessagesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/channels/:channelId/messages",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
