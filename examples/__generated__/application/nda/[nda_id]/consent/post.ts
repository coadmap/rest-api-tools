/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostNdaNdaIdConsentUrlParams = {
  ndaId: string
} | undefined

export type PostNdaNdaIdConsentResponse = Types.ConsentNda

export type PostNdaNdaIdConsentRequestBody = {
  nda: {
    name: string
    address: string
  }
}

export const postNdaNdaIdConsent = new BaseRequest<
  PostNdaNdaIdConsentRequestBody,
  PostNdaNdaIdConsentResponse,
  PostNdaNdaIdConsentUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/nda/:ndaId/consent",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
