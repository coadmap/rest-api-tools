/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetMessagesIdUrlParams = {
  id: string
} | undefined

export type GetMessagesIdResponse = Types.MessageRes

export const getMessagesId = new BaseRequest<
  undefined,
  GetMessagesIdResponse,
  GetMessagesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/messages/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
