/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../../shared/index";
import { API_HOST } from "../../../../../../urls";

export type DeleteJobOrdersJobOrderIdFilesFileIdUrlParams = {
  jobOrderId: string
  fileId: string
  companyId: string
} | undefined

export type DeleteJobOrdersJobOrderIdFilesFileIdResponse = Types.JobOrderRes

export const deleteJobOrdersJobOrderIdFilesFileId = new BaseRequest<
  undefined,
  DeleteJobOrdersJobOrderIdFilesFileIdResponse,
  DeleteJobOrdersJobOrderIdFilesFileIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/job_orders/:jobOrderId/files/:fileId",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
