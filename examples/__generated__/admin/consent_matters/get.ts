/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetConsentMattersResponse = Types.ConsentMattersRes

export const getConsentMatters = new BaseRequest<
  undefined,
  GetConsentMattersResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/consent_matters",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
