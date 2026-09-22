/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdProfileUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdProfileResponse = Types.ProfileRes

export type PostAccountsAccountIdProfileRequestBody = {
  profile: {
    firstName: string
    lastName: string
    firstNameKana?: string | undefined
    lastNameKana?: string | undefined
    gender?: 'male' | 'female' | 'other' | undefined
    phone?: string | undefined
    nationality?: string | undefined
    placeOfResidenceId?: string | undefined
    postalCode?: string | undefined
    address?: string | undefined
    /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
    englishSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
    birthOfDate?: string | undefined
    biography?: string | undefined
    /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
    japaneseSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
    /** 直近の年収 */
    recentIncomeAmount?: number | undefined
    /** マネジメント経験人数 */
    managementExperience?: 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | 'nothing' | 'less_than_5' | undefined
    /** 転職回数 */
    numberOfJobChanges?: number | undefined
    /** 「配偶者無」「配偶者有」 */
    maritalStatus?: 'single' | 'married' | undefined
  }
}

export const postAccountsAccountIdProfile = new BaseRequest<
  PostAccountsAccountIdProfileRequestBody,
  PostAccountsAccountIdProfileResponse,
  PostAccountsAccountIdProfileUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/profile",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
