/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteAchievementsIdUrlParams = {
  id: string
} | undefined

export const deleteAchievementsId = new BaseRequest<
  undefined,
  undefined,
  DeleteAchievementsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/achievements/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
