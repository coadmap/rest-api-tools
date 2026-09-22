/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostVerifyNewEmploymentEmailRequestBody = {
  token: string
  email: string
}

export const postVerifyNewEmploymentEmail = new BaseRequest<
  PostVerifyNewEmploymentEmailRequestBody,
  undefined,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/verify_new_employment_email",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
