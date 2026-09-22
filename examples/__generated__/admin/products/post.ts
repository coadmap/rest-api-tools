/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostProductResponse = Types.ProductRes

export type PostProductRequestBody = {
  product: {
    active?: boolean | undefined
    description?: string | undefined
    name: string
    planType?: 'client' | 'agent' | undefined
    /** good=買い切り商品, service=サブスク */
    type: 'good' | 'service'
  }
}

export const postProduct = new BaseRequest<
  PostProductRequestBody,
  PostProductResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/products",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
