/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteProductsIdUrlParams = {
  id: string
} | undefined

export const deleteProductsId = new BaseRequest<
  undefined,
  undefined,
  DeleteProductsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/products/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
