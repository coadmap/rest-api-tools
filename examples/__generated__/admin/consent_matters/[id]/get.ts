/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetConsentMattersIdUrlParams = {
  id: string
} | undefined

export type GetConsentMattersIdResponse = Types.ConsentMatterRes

export const getConsentMattersId = new BaseRequest<
  undefined,
  GetConsentMattersIdResponse,
  GetConsentMattersIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/consent_matters/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
