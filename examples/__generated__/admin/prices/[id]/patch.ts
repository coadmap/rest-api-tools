/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchPricesIdUrlParams = {
  id: string
} | undefined

export type PatchPricesIdResponse = Types.PriceRes

export type PatchPricesIdRequestBody = {
  price: {
    active?: boolean | undefined
  }
}

export const patchPricesId = new BaseRequest<
  PatchPricesIdRequestBody,
  PatchPricesIdResponse,
  PatchPricesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/prices/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
