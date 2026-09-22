/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteAccountsIdUrlParams = {
  id: string
} | undefined

export const deleteAccountsId = new BaseRequest<
  undefined,
  undefined,
  DeleteAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/accounts/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
