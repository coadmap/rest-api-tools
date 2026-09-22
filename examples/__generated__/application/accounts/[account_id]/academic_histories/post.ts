/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdAcademicHistoriesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdAcademicHistoriesResponse = Types.AcademicHistoriesRes

export type PostAccountsAccountIdAcademicHistoriesRequestBody = {
  academicHistory: {
    name: string
    faculty?: string | undefined
    sinceDate: string
    untilDate: string
    /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
    type: 'university' | 'junior_college' | 'high_school' | 'graduate_school_doctor' | 'graduate_school_master' | 'technical_college' | 'vocational_school'
  }
}

export const postAccountsAccountIdAcademicHistories = new BaseRequest<
  PostAccountsAccountIdAcademicHistoriesRequestBody,
  PostAccountsAccountIdAcademicHistoriesResponse,
  PostAccountsAccountIdAcademicHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/academic_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
