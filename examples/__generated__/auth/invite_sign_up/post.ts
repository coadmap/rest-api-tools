/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostInviteSignUpResponse = Types.AccountWithTokenRes

export type PostInviteSignUpRequestBody = {
  account: {
    email: string
    password: string
  }

  employment: {
    id: string
    inviteToken: string
  }

  profile: {
    firstName: string
    lastName: string
  }
}

export const postInviteSignUp = new BaseRequest<
  PostInviteSignUpRequestBody,
  PostInviteSignUpResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/invite_sign_up",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
