/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdAccountSearchConditionsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdAccountSearchConditionsResponse = Types.AccountSearchConditionRes

export type PostCompaniesCompanyIdAccountSearchConditionsRequestBody = {
  accountSearchCondition: {
    title: string
    keyword?: string | undefined
    keywordOr?: boolean | undefined
    currentCompanyName?: string | undefined
    currentCompanyNameOr?: boolean | undefined
    positionName?: string | undefined
    positionNameOr?: boolean | undefined
    cvUpdatedIn?: 'three_day' | 'one_week' | 'one_month' | 'three_month' | 'half_year' | undefined
    employmentStatus?: 'employed' | 'unemployed' | undefined
    managementExperience?: 'everything' | 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | undefined
    minRecentIncomeAmount?: number | undefined
    maxRecentIncomeAmount?: number | undefined
    numberOfJobChanges?: 'unspecified' | 'nothing' | 'one' | 'two' | 'three' | 'four' | undefined
    gender?: 'male' | 'female' | 'other' | undefined
    academicBackground?: 'graduate_school_doctor' | 'graduate_school_master' | 'university' | 'technical_college' | 'vocational_school' | 'junior_college' | 'high_school' | undefined
    minAge?: number | undefined
    maxAge?: number | undefined
    recruitmentPageView?: boolean | undefined
    lastSignInAt?: 'within_one_day' | 'within_one_week' | 'within_one_month' | undefined
    interestedInCompany?: boolean | undefined
    occupationHistories?: {
      name?: string | undefined
      occupationId?: string | undefined
      yearOfOccupationExperience?: number | undefined
    }[] | undefined
    industryHistories?: {
      name?: string | undefined
      industryId?: string | undefined
      yearOfIndustryExperience?: number | undefined
    }[] | undefined
    japaneseSkill?: 'daily_conversation' | 'business_conversation' | 'native' | undefined
    englishSkill?: 'daily_conversation' | 'business_conversation' | 'native' | undefined
    currentStateIds?: string[] | undefined
    scoutSettings?: ('career' | 'project')[] | undefined
    maritalStatus?: 'single' | 'married' | undefined
    hopingMinIncomeAmount?: number | undefined
    hopingMaxIncomeAmount?: number | undefined
    hopingOccupationIds?: string[] | undefined
    hopingIndustryIds?: string[] | undefined
    hopingStateIds?: string[] | undefined
  }
}

export const postCompaniesCompanyIdAccountSearchConditions = new BaseRequest<
  PostCompaniesCompanyIdAccountSearchConditionsRequestBody,
  PostCompaniesCompanyIdAccountSearchConditionsResponse,
  PostCompaniesCompanyIdAccountSearchConditionsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/account_search_conditions",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
