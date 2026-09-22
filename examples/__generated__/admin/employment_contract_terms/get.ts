/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetEmloymentContractTermsResponse = Types.EmploymentContractTermsRes

export const getEmloymentContractTerms = new BaseRequest<
  undefined,
  GetEmloymentContractTermsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/employment_contract_terms",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
