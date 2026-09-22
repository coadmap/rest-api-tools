/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdForceCancelAgentUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdForceCancelAgentResponse = Types.AccountRes

export const postAccountsAccountIdForceCancelAgent = new BaseRequest<
  undefined,
  PostAccountsAccountIdForceCancelAgentResponse,
  PostAccountsAccountIdForceCancelAgentUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/force_cancel_agent",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
