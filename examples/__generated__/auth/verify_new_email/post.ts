/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostVerifyNewEmailRequestBody = {
  token: string
  email: string
}

export const postVerifyNewEmail = new BaseRequest<
  PostVerifyNewEmailRequestBody,
  undefined,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/verify_new_email",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
