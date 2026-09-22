/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetProductsIdPricesUrlParams = {
  id: string
} | undefined

export type GetProductsIdPricesResponse = Types.PricesRes

export const getProductsIdPrices = new BaseRequest<
  undefined,
  GetProductsIdPricesResponse,
  GetProductsIdPricesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/products/:id/prices",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
