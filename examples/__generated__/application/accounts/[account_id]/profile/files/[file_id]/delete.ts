/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type DeleteAccountsAccountIdProfileFilesIdUrlParams = {
  accountId: string
  fileId: string
} | undefined

export type DeleteAccountsAccountIdProfileFilesIdResponse = Types.ProfileRes

export const deleteAccountsAccountIdProfileFilesId = new BaseRequest<
  undefined,
  DeleteAccountsAccountIdProfileFilesIdResponse,
  DeleteAccountsAccountIdProfileFilesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/accounts/:accountId/profile/files/:fileId",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
