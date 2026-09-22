/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetProductResponse = Types.ProductsRes

export const getProduct = new BaseRequest<
  undefined,
  GetProductResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/products",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
