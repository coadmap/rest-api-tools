/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchEmploymentStatusesIdUrlParams = {
  id: string
} | undefined

export type PatchEmploymentStatusesIdResponse = Types.EmploymentStatusRes

export type PatchEmploymentStatusesIdRequestBody = {
  employmentStatus: {
    name?: string | undefined
    type?: 'CAREER' | 'PROJECT' | undefined
  }
}

export const patchEmploymentStatusesId = new BaseRequest<
  PatchEmploymentStatusesIdRequestBody,
  PatchEmploymentStatusesIdResponse,
  PatchEmploymentStatusesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/employment_statuses/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
