/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdRejectAgentUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdRejectAgentResponse = Types.AccountRes

export const postAccountsAccountIdRejectAgent = new BaseRequest<
  undefined,
  PostAccountsAccountIdRejectAgentResponse,
  PostAccountsAccountIdRejectAgentUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/reject_agent",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
