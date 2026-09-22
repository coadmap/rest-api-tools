/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetProductsIdUrlParams = {
  id: string
} | undefined

export type GetProductsIdResponse = Types.ProductRes

export const getProductsId = new BaseRequest<
  undefined,
  GetProductsIdResponse,
  GetProductsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/products/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
