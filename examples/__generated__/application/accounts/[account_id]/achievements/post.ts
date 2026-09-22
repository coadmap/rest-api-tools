/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdAchievementsUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdAchievementsResponse = Types.AchievementRes

export type PostAccountsAccountIdAchievementsRequestBody = {
  achievement: {
    content: string
    createdDate?: string | null | undefined
    sinceDate?: string | null | undefined
    untilDate?: string | null | undefined
    description?: string | undefined
  }
}

export const postAccountsAccountIdAchievements = new BaseRequest<
  PostAccountsAccountIdAchievementsRequestBody,
  PostAccountsAccountIdAchievementsResponse,
  PostAccountsAccountIdAchievementsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/achievements",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
