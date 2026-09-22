/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetChannelsChannelIdMessagesUrlParams = {
  channelId: string
} | undefined

export type GetChannelsChannelIdMessagesResponse = Types.MessagesRes

export type GetChannelsChannelIdMessagesQueryParams = {
  page?: number | undefined
  /** 下書きか */
  isDraft?: boolean | undefined
}

export const getChannelsChannelIdMessages = new BaseRequest<
  undefined,
  GetChannelsChannelIdMessagesResponse,
  GetChannelsChannelIdMessagesUrlParams,
  GetChannelsChannelIdMessagesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/channels/:channelId/messages",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
