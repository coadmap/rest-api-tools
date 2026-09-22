/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchAccountsIdUrlParams = {
  id: string
} | undefined

export type PatchAccountsIdResponse = Types.AccountRes

export type PatchAccountsIdRequestBody = {
  account: {
    email?: string | undefined
    avatar?: File | undefined
    workExperienced?: boolean | undefined
    isCareerScoutTarget?: boolean | undefined
    isProjectScoutTarget?: boolean | undefined
    isPublicWork?: boolean | undefined
    /** 新パスワードを設定する時に必要 */
    currentPassword?: string | undefined
    newPassword?: string | undefined
    newPasswordConfirmation?: string | undefined
  }
}

export const patchAccountsId = new BaseRequest<
  PatchAccountsIdRequestBody,
  PatchAccountsIdResponse,
  PatchAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/accounts/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
