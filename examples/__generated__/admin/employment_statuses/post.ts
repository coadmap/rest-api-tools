/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostEmploymentStatusesResponse = Types.EmploymentStatusRes

export type PostEmploymentStatusesRequestBody = {
  employmentStatus: {
    name?: string | undefined
    type?: 'CAREER' | 'PROJECT' | undefined
  }
}

export const postEmploymentStatuses = new BaseRequest<
  PostEmploymentStatusesRequestBody,
  PostEmploymentStatusesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/employment_statuses",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
