/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostChannelsChannelIdMarkAsReadUrlParams = {
  channelId: string
} | undefined

export const postChannelsChannelIdMarkAsRead = new BaseRequest<
  undefined,
  undefined,
  PostChannelsChannelIdMarkAsReadUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/channels/:channelId/mark_as_read",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
