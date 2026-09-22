/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetJobOrdersIdUrlParams = {
  id: string
} | undefined

export type GetJobOrdersIdResponse = Types.JobOrderRes

export const getJobOrdersId = new BaseRequest<
  undefined,
  GetJobOrdersIdResponse,
  GetJobOrdersIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/job_orders/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
