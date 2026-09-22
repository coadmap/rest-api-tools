/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteRecruitmentInterestsRecruitmentIdUrlParams = {
  recruitmentId: string
} | undefined

export const deleteRecruitmentInterestsRecruitmentId = new BaseRequest<
  undefined,
  undefined,
  DeleteRecruitmentInterestsRecruitmentIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/recruitment_interests/:recruitmentId",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
