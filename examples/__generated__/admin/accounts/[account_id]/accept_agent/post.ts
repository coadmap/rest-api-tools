/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdAcceptAgentUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdAcceptAgentResponse = Types.AccountRes

export const postAccountsAccountIdAcceptAgent = new BaseRequest<
  undefined,
  PostAccountsAccountIdAcceptAgentResponse,
  PostAccountsAccountIdAcceptAgentUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/accept_agent",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
