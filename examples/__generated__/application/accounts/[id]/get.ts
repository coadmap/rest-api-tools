/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetAccountsIdUrlParams = {
  id: string
} | undefined

export type GetAccountsIdResponse = Types.AccountRes

export const getAccountsId = new BaseRequest<
  undefined,
  GetAccountsIdResponse,
  GetAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
