/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdRecruitmentInterestsUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdRecruitmentInterestsResponse = Types.RecruitmentRes

export type PostAccountsAccountIdRecruitmentInterestsRequestBody = {
  recruitmentInterest: {
    recruitmentId: string
  }
}

export const postAccountsAccountIdRecruitmentInterests = new BaseRequest<
  PostAccountsAccountIdRecruitmentInterestsRequestBody,
  PostAccountsAccountIdRecruitmentInterestsResponse,
  PostAccountsAccountIdRecruitmentInterestsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/recruitment_interests",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
