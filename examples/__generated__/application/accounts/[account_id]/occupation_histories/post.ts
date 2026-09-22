/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdOccupationHistoriesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdOccupationHistoriesResponse = Types.OccupationHistoriesRes

export type PostAccountsAccountIdOccupationHistoriesRequestBody = {
  occupationHistories: {
    occupationHistory?: {
      occupationId: string
      yearOfExperience: number
    } | undefined
  }[]
}

export const postAccountsAccountIdOccupationHistories = new BaseRequest<
  PostAccountsAccountIdOccupationHistoriesRequestBody,
  PostAccountsAccountIdOccupationHistoriesResponse,
  PostAccountsAccountIdOccupationHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/occupation_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
