/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetWithdrawalsResponse = Types.WithdrawalsRes

export const getWithdrawals = new BaseRequest<
  undefined,
  GetWithdrawalsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/withdrawals",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
