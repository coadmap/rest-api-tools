/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostPrivacyPolicyHistoriesResponse = Types.PrivacyPolicyHistoryRes

export type PostPrivacyPolicyHistoriesRequestBody = {
  privacyPolicyHistory: {
    content?: string | undefined
    version?: string | undefined
  }
}

export const postPrivacyPolicyHistories = new BaseRequest<
  PostPrivacyPolicyHistoriesRequestBody,
  PostPrivacyPolicyHistoriesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/privacy_policy_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
