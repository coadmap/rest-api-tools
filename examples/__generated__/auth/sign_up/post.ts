/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostSignUpResponse = Types.AccountRes

export type PostSignUpRequestBody = {
  account?: {
    email: string
    password: string
  } | undefined

  /** 「求職者」or「企業」or「エージェント」 */
  type: 'general' | 'company' | 'agent'
}

export const postSignUp = new BaseRequest<
  PostSignUpRequestBody,
  PostSignUpResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/sign_up",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
