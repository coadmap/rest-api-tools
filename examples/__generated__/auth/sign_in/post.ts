/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostSignInResponse = Types.AccountWithTokenRes

export type PostSignInRequestBody = {
  account: {
    email: string
    password: string
  }
}

export const postSignIn = new BaseRequest<
  PostSignInRequestBody,
  PostSignInResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/sign_in",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
