/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export const getVerifyEmail = new BaseRequest<
  undefined,
  undefined,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/verify_email",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
