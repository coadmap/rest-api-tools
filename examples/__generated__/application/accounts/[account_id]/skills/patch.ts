/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PatchAccountsAccountIdSkillsUrlParams = {
  accountId: string
} | undefined

export type PatchAccountsAccountIdSkillsResponse = Types.SkillsRes

export type PatchAccountsAccountIdSkillsRequestBody = {
  skill: {
    ids: string[]
  }
}

export const patchAccountsAccountIdSkills = new BaseRequest<
  PatchAccountsAccountIdSkillsRequestBody,
  PatchAccountsAccountIdSkillsResponse,
  PatchAccountsAccountIdSkillsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/accounts/:accountId/skills",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
