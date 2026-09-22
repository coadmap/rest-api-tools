/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchJobOrdersIdUrlParams = {
  id: string
} | undefined

export type PatchJobOrdersIdResponse = Types.JobOrderRes

export type PatchJobOrdersIdRequestBody = {
  jobOrder: {
    status?: 'certificated' | 'rejected' | undefined
    /** rejectedの場合、必須 */
    reviewComment?: string | undefined
  }
}

export const patchJobOrdersId = new BaseRequest<
  PatchJobOrdersIdRequestBody,
  PatchJobOrdersIdResponse,
  PatchJobOrdersIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/job_orders/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
