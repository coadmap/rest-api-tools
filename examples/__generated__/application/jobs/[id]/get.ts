/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetJobsIdUrlParams = {
  id: string
} | undefined

export type GetJobsIdResponse = Types.JobRes

export const getJobsId = new BaseRequest<
  undefined,
  GetJobsIdResponse,
  GetJobsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/jobs/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
