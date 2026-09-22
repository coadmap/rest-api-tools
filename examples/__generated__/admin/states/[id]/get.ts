/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetStatesIdUrlParams = {
  id: string
} | undefined

export type GetStatesIdResponse = Types.StateRes

export const getStatesId = new BaseRequest<
  undefined,
  GetStatesIdResponse,
  GetStatesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/states/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
