/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetPrivacyPolicyHistoriesResponse = Types.PrivacyPolicyHistoriesRes

export const getPrivacyPolicyHistories = new BaseRequest<
  undefined,
  GetPrivacyPolicyHistoriesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/privacy_policy_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
