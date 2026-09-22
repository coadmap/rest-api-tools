/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetEmploymentStatusesIdUrlParams = {
  id: string
} | undefined

export type GetEmploymentStatusesIdResponse = Types.EmploymentStatusRes

export const getEmploymentStatusesId = new BaseRequest<
  undefined,
  GetEmploymentStatusesIdResponse,
  GetEmploymentStatusesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/employment_statuses/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
