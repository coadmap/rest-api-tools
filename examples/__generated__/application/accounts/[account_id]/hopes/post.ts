/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdHopesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdHopesResponse = Types.HopeRes

export type PostAccountsAccountIdHopesRequestBody = {
  hope: {
    /** 何ヶ月以内に転職したいか */
    timeToChangeJob: number
    amount: number
    /** 「時給」「日給」「月給」「年収」「1案件」 */
    billingMethod: 'hourly' | 'monthly' | 'yearly' | 'with_project'
    type: 'career' | 'project'
    specialNote?: string | undefined
    /** 「~20%(週に1回)」「40~60%(週に2.3回)」「80%~(週に4回)」 */
    ratioOfOperation?: 'once_a_week' | 'few_days_a_week' | 'four_days_a_week' | undefined
    /** StateのID */
    workplaceIds?: string[] | undefined
    industryIds?: string[] | undefined
    occupationIds: string[]
  }
}

export const postAccountsAccountIdHopes = new BaseRequest<
  PostAccountsAccountIdHopesRequestBody,
  PostAccountsAccountIdHopesResponse,
  PostAccountsAccountIdHopesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/hopes",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
