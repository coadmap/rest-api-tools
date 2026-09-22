/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetPoliciesResponse = Types.PoliciesRes

export const getPolicies = new BaseRequest<
  undefined,
  GetPoliciesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/policies",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
