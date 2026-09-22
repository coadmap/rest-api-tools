/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetChannelsIdUrlParams = {
  id: string
} | undefined

export type GetChannelsIdResponse = Types.ChannelRes

export const getChannelsId = new BaseRequest<
  undefined,
  GetChannelsIdResponse,
  GetChannelsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/channels/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
