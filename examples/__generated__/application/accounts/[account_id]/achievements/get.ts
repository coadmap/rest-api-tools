/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdAchievementsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdAchievementsResponse = Types.AchievementsRes

export const getAccountsAccountIdAchievements = new BaseRequest<
  undefined,
  GetAccountsAccountIdAchievementsResponse,
  GetAccountsAccountIdAchievementsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/achievements",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
