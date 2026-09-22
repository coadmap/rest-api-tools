/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type PostCompaniesCompanyIdChannelsChannelIdMessagesUrlParams = {
  companyId: string
  channelId: string
} | undefined

export type PostCompaniesCompanyIdChannelsChannelIdMessagesResponse = Types.MessageRes

export type PostCompaniesCompanyIdChannelsChannelIdMessagesRequestBody = {
  message: {
    /** 発言するaccountのid */
    senderId: string
    content: string
    recruitmentIds?: string[] | undefined
    isDraft: boolean
  }
}

export const postCompaniesCompanyIdChannelsChannelIdMessages = new BaseRequest<
  PostCompaniesCompanyIdChannelsChannelIdMessagesRequestBody,
  PostCompaniesCompanyIdChannelsChannelIdMessagesResponse,
  PostCompaniesCompanyIdChannelsChannelIdMessagesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/channels/:channelId/messages",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
