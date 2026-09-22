/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostChannelsChannelIdMessagesSubmitUrlParams = {
  channelId: string
} | undefined

export type PostChannelsChannelIdMessagesSubmitResponse = Types.MessageRes

export type PostChannelsChannelIdMessagesSubmitRequestBody = {
  message: {
    /** 発言するaccountのid */
    senderId: string
    content?: string | undefined
    /** 添付ファイルのこと、つかいたかはSpecのREADME見て */
    attachment?: File | undefined
  }
}

export const postChannelsChannelIdMessagesSubmit = new BaseRequest<
  PostChannelsChannelIdMessagesSubmitRequestBody,
  PostChannelsChannelIdMessagesSubmitResponse,
  PostChannelsChannelIdMessagesSubmitUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/channels/:channelId/messages/submit",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
