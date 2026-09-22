/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdAcceptUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdAcceptResponse = Types.CompanyRes

export const postCompaniesCompanyIdAccept = new BaseRequest<
  undefined,
  PostCompaniesCompanyIdAcceptResponse,
  PostCompaniesCompanyIdAcceptUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/accept",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
