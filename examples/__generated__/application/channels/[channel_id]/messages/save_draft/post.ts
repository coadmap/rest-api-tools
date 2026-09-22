/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostChannelsChannelIdMessagesSaveDraftUrlParams = {
  channelId: string
} | undefined

export type PostChannelsChannelIdMessagesSaveDraftResponse = Types.MessageRes

export type PostChannelsChannelIdMessagesSaveDraftRequestBody = {
  message: {
    /** 発言するaccountのid */
    senderId: string
    content?: string | undefined
    /** 添付ファイルのこと、つかいたかはSpecのREADME見て */
    attachment?: File | undefined
  }
}

export const postChannelsChannelIdMessagesSaveDraft = new BaseRequest<
  PostChannelsChannelIdMessagesSaveDraftRequestBody,
  PostChannelsChannelIdMessagesSaveDraftResponse,
  PostChannelsChannelIdMessagesSaveDraftUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/channels/:channelId/messages/save_draft",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
