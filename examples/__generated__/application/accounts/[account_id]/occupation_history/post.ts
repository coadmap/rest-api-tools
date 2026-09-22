/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdOccupationHistoryUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdOccupationHistoryResponse = Types.OccupationHistoryRes

export type PostAccountsAccountIdOccupationHistoryRequestBody = {
  occupationHistory: {
    occupationId: string
    yearOfExperience: number
  }
}

export const postAccountsAccountIdOccupationHistory = new BaseRequest<
  PostAccountsAccountIdOccupationHistoryRequestBody,
  PostAccountsAccountIdOccupationHistoryResponse,
  PostAccountsAccountIdOccupationHistoryUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/occupation_history",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
