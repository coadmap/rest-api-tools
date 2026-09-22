/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteNotAgreedConsentMattersIdUrlParams = {
  id: string
} | undefined

export const deleteNotAgreedConsentMattersId = new BaseRequest<
  undefined,
  undefined,
  DeleteNotAgreedConsentMattersIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/not_agreed_consent_matters/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
