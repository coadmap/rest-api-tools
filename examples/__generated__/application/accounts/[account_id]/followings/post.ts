/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdFollowingUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdFollowingResponse = Types.CompanyRes

export type PostAccountsAccountIdFollowingRequestBody = {
  following: {
    companyId: string
  }
}

export const postAccountsAccountIdFollowing = new BaseRequest<
  PostAccountsAccountIdFollowingRequestBody,
  PostAccountsAccountIdFollowingResponse,
  PostAccountsAccountIdFollowingUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/followings",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
