/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostAccountsAccountIdProfileSpecialtyPositionsUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdProfileSpecialtyPositionsResponse = Types.SpecialtyPositionRes

export type PostAccountsAccountIdProfileSpecialtyPositionsRequestBody = {
  specialtyPosition: {
    content?: string | undefined
  }
}

export const postAccountsAccountIdProfileSpecialtyPositions = new BaseRequest<
  PostAccountsAccountIdProfileSpecialtyPositionsRequestBody,
  PostAccountsAccountIdProfileSpecialtyPositionsResponse,
  PostAccountsAccountIdProfileSpecialtyPositionsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/agent_profile/specialty_positions",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
