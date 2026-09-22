/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostSignInResponse = {
  account: Types.AdminAccount
  token: string
}

export type PostSignInRequestBody = {
  adminAccount: {
    email: string
    password: string
  }
}

export type PostSignInQueryParams = {
}

export const postSignIn = new BaseRequest<
  PostSignInRequestBody,
  PostSignInResponse,
  undefined,
  PostSignInQueryParams
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/sign_in",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
