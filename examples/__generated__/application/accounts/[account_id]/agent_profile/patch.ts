/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PatchAccountsAccountIdAgentProfileUrlParams = {
  accountId: string
} | undefined

export type PatchAccountsAccountIdAgentProfileResponse = Types.AgentProfileRes

export type PatchAccountsAccountIdAgentProfileRequestBody = {
  agentProfile: {
    academicBackground?: string | undefined
    achievement?: string | undefined
    areaInCharge?: string | undefined
    selfPr?: string | undefined
    message?: string | undefined
    description?: string | undefined
    yearOfAgentExperience?: number | undefined
    /** エージェント得意職種 */
    occupationMainCategoryIds?: string[] | undefined
    /** エージェント得意業種 */
    industryCategoryIds?: string[] | undefined
    /** 誓約書 form-dataで投げる */
    pledge?: string | undefined
    /** 内定通知書 form-dataで投げる */
    offerLetters?: string[] | undefined
  }
}

export const patchAccountsAccountIdAgentProfile = new BaseRequest<
  PatchAccountsAccountIdAgentProfileRequestBody,
  PatchAccountsAccountIdAgentProfileResponse,
  PatchAccountsAccountIdAgentProfileUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/accounts/:accountId/agent_profile",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
