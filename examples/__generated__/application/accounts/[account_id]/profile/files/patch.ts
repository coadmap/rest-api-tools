/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchAccountsAccountIdProfileFilesUrlParams = {
  accountId: string
} | undefined

export type PatchAccountsAccountIdProfileFilesResponse = Types.ProfileRes

export type PatchAccountsAccountIdProfileFilesRequestBody = {
  files: File[]
}

export const patchAccountsAccountIdProfileFiles = new BaseRequest<
  PatchAccountsAccountIdProfileFilesRequestBody,
  PatchAccountsAccountIdProfileFilesResponse,
  PatchAccountsAccountIdProfileFilesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/accounts/:accountId/profile/files",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
