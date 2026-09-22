/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetPayoutsResponse = Types.PayoutsRes

export const getPayouts = new BaseRequest<
  undefined,
  GetPayoutsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/payouts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
