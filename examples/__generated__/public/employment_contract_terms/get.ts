/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetEmploymentContractTermsResponse = Types.EmploymentContractTermsRes

export const getEmploymentContractTerms = new BaseRequest<
  undefined,
  GetEmploymentContractTermsResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/employment_contract_terms",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
