/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetEmploymentStatusesResponse = Types.EmploymentStatusesRes

export type GetEmploymentStatusesQueryParams = {
  type?: 'project' | 'career' | undefined
}

export const getEmploymentStatuses = new BaseRequest<
  undefined,
  GetEmploymentStatusesResponse,
  undefined,
  GetEmploymentStatusesQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/employment_statuses",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
