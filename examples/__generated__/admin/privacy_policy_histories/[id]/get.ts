/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetPrivacyPolicyHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetPrivacyPolicyHistoriesIdResponse = Types.PrivacyPolicyHistoryRes

export const getPrivacyPolicyHistoriesId = new BaseRequest<
  undefined,
  GetPrivacyPolicyHistoriesIdResponse,
  GetPrivacyPolicyHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/privacy_policy_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
