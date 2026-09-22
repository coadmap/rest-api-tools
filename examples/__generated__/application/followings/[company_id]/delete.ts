/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteAccountsAccountIdFollowingCompanyIdUrlParams = {
  companyId: string
} | undefined

export const deleteAccountsAccountIdFollowingCompanyId = new BaseRequest<
  undefined,
  undefined,
  DeleteAccountsAccountIdFollowingCompanyIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/followings/:companyId",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
