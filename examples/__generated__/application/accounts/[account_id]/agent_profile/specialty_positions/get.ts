/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetAccountsAccountIdProfileSpecialtyPositionsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdProfileSpecialtyPositionsResponse = Types.SpecialtyPositionsRes

export const getAccountsAccountIdProfileSpecialtyPositions = new BaseRequest<
  undefined,
  GetAccountsAccountIdProfileSpecialtyPositionsResponse,
  GetAccountsAccountIdProfileSpecialtyPositionsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/agent_profile/specialty_positions",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
