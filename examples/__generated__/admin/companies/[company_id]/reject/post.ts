/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdRejectUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdRejectResponse = Types.CompanyRes

export const postCompaniesCompanyIdReject = new BaseRequest<
  undefined,
  PostCompaniesCompanyIdRejectResponse,
  PostCompaniesCompanyIdRejectUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/reject",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
