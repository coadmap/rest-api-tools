/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PostAccountsResetPasswordRequestBody = {
  account: {
    email: string
  }
}

export const postAccountsResetPassword = new BaseRequest<
  PostAccountsResetPasswordRequestBody,
  undefined,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/reset_password",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
