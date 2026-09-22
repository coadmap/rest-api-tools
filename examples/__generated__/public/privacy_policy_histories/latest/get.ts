/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetPrivacyPolicyHistoriesLatestResponse = Types.PrivacyPolicyHistory

export const getPrivacyPolicyHistoriesLatest = new BaseRequest<
  undefined,
  GetPrivacyPolicyHistoriesLatestResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/privacy_policy_histories/latest",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
