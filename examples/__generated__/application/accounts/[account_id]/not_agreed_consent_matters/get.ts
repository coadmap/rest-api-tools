/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetaccountsAccountIdAgreeConsentMattersUrlParams = {
  accountId: string
} | undefined

export type GetaccountsAccountIdAgreeConsentMattersResponse = {
  consentMatters: Types.ConsentMatter[]
}

export const getaccountsAccountIdAgreeConsentMatters = new BaseRequest<
  undefined,
  GetaccountsAccountIdAgreeConsentMattersResponse,
  GetaccountsAccountIdAgreeConsentMattersUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/not_agreed_consent_matters",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
