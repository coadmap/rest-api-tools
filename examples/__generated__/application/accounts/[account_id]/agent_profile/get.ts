/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdAgentProfileUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdAgentProfileResponse = Types.AgentProfileRes

export const getAccountsAccountIdAgentProfile = new BaseRequest<
  undefined,
  GetAccountsAccountIdAgentProfileResponse,
  GetAccountsAccountIdAgentProfileUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/agent_profile",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
