/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchProductsIdUrlParams = {
  id: string
} | undefined

export type PatchProductsIdResponse = Types.ProductRes

export type PatchProductsIdRequestBody = {
  product: {
    active?: boolean | undefined
    description?: string | undefined
    name?: string | undefined
  }
}

export const patchProductsId = new BaseRequest<
  PatchProductsIdRequestBody,
  PatchProductsIdResponse,
  PatchProductsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/products/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
