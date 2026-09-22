/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostConsentMattersResponse = Types.ConsentMatterRes

export type PostConsentMattersRequestBody = {
  consentMatter: {
    content?: string | undefined
  }
}

export const postConsentMatters = new BaseRequest<
  PostConsentMattersRequestBody,
  PostConsentMattersResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/consent_matters",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
