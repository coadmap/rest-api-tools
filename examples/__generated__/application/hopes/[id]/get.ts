/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetHopesIdUrlParams = {
  id: string
} | undefined

export type GetHopesIdResponse = Types.HopeRes

export const getHopesId = new BaseRequest<
  undefined,
  GetHopesIdResponse,
  GetHopesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/hopes/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
