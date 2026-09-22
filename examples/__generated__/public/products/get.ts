/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetPlansResponse = Types.ProductsRes

export const getPlans = new BaseRequest<
  undefined,
  GetPlansResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/products",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
