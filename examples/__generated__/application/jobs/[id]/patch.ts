/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchJobsIdUrlParams = {
  id: string
} | undefined

export type PatchJobsIdResponse = Types.JobRes

export type PatchJobsIdRequestBody = {
  job: {
    isPublic?: boolean | undefined
  }
}

export const patchJobsId = new BaseRequest<
  PatchJobsIdRequestBody,
  PatchJobsIdResponse,
  PatchJobsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/jobs/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
