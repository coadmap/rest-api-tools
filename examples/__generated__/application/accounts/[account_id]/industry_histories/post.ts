/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdIndustryHistoriesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdIndustryHistoriesResponse = Types.IndustryHistoriesRes

export type PostAccountsAccountIdIndustryHistoriesRequestBody = {
  industryHistories: {
    industryHistory?: {
      industryId: string
      yearOfExperience: number
    } | undefined
  }[]
}

export const postAccountsAccountIdIndustryHistories = new BaseRequest<
  PostAccountsAccountIdIndustryHistoriesRequestBody,
  PostAccountsAccountIdIndustryHistoriesResponse,
  PostAccountsAccountIdIndustryHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/industry_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
