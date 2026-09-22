/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostProductsIdPricesUrlParams = {
  id: string
} | undefined

export type PostProductsIdPricesResponse = Types.PriceRes

export type PostProductsIdPricesRequestBody = {
  price: {
    active?: boolean | undefined
    /** ISO 4217 */
    currency: string
    /** サブスクの場合のみ必須 */
    interval?: 'day' | 'week' | 'month' | 'year' | undefined
    /** 請求周期, 3日に1回とか */
    intervalCount?: string | undefined
    /** 買い切りかサブスクか */
    type: 'one_time' | 'recurring'
    unitAmount: number
  }
}

export const postProductsIdPrices = new BaseRequest<
  PostProductsIdPricesRequestBody,
  PostProductsIdPricesResponse,
  PostProductsIdPricesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/products/:id/prices",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
