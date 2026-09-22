/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdRecruitmentInterestsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdRecruitmentInterestsResponse = Types.RecruitmentInterestsRes

export type GetAccountsAccountIdRecruitmentInterestsQueryParams = {
  page?: number | undefined
}

export const getAccountsAccountIdRecruitmentInterests = new BaseRequest<
  undefined,
  GetAccountsAccountIdRecruitmentInterestsResponse,
  GetAccountsAccountIdRecruitmentInterestsUrlParams,
  GetAccountsAccountIdRecruitmentInterestsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/recruitment_interests",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
