/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetPlansIdUrlParams = {
  id: string
} | undefined

export type GetPlansIdResponse = Types.ProductRes

export const getPlansId = new BaseRequest<
  undefined,
  GetPlansIdResponse,
  GetPlansIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/products/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
