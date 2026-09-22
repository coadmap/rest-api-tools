/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PatchAccountsAccountIdScoutsUrlParams = {
  accountId: string
} | undefined

export type PatchAccountsAccountIdScoutsRequestBody = {
  scouts: {
    id: string
    isOpened?: boolean | undefined
    isChecked?: boolean | undefined
  }[]
}

export const patchAccountsAccountIdScouts = new BaseRequest<
  PatchAccountsAccountIdScoutsRequestBody,
  undefined,
  PatchAccountsAccountIdScoutsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/accounts/:accountId/scouts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
