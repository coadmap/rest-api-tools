/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type PatchJobOrdersJobOrderIdFilesUrlParams = {
  jobOrderId: string
  companyId: string
} | undefined

export type PatchJobOrdersJobOrderIdFilesResponse = Types.JobOrderRes

export type PatchJobOrdersJobOrderIdFilesRequestBody = {
  files: File[]
}

export const patchJobOrdersJobOrderIdFiles = new BaseRequest<
  PatchJobOrdersJobOrderIdFilesRequestBody,
  PatchJobOrdersJobOrderIdFilesResponse,
  PatchJobOrdersJobOrderIdFilesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/job_orders/:jobOrderId/files",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
