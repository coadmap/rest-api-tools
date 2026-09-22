/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchAchievementsIdUrlParams = {
  id: string
} | undefined

export type PatchAchievementsIdResponse = Types.AchievementRes

export type PatchAchievementsIdRequestBody = {
  achievement: {
    content?: string | undefined
    createdDate?: string | null | undefined
    sinceDate?: string | null | undefined
    untilDate?: string | null | undefined
    description?: string | undefined
  }
}

export const patchAchievementsId = new BaseRequest<
  PatchAchievementsIdRequestBody,
  PatchAchievementsIdResponse,
  PatchAchievementsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/achievements/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
