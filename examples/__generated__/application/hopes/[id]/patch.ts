/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchHopesIdUrlParams = {
  id: string
} | undefined

export type PatchHopesIdResponse = Types.HopeRes

export type PatchHopesIdRequestBody = {
  hope: {
    /** 何ヶ月以内に転職したいか */
    timeToChangeJob?: number | undefined
    amount?: number | undefined
    /** 「時給」「月給」「年収」 */
    billingMethod?: 'hourly' | 'monthly' | 'yearly' | 'with_project' | undefined
    type?: 'career' | 'project' | undefined
    specialNote?: string | undefined
    /** StateのID */
    workplaceIds?: string[] | undefined
    industryIds?: string[] | undefined
    occupationIds?: string[] | undefined
    /** 「~20%(週に1回)」「40~60%(週に2.3回)」「80%~(週に4回)」 */
    ratioOfOperation?: 'once_a_week' | 'few_days_a_week' | 'four_days_a_week' | undefined
  }
}

export const patchHopesId = new BaseRequest<
  PatchHopesIdRequestBody,
  PatchHopesIdResponse,
  PatchHopesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/hopes/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
