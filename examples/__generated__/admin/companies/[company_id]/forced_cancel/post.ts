/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdForcedCancelUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdForcedCancelResponse = Types.CompanyRes

export const postCompaniesCompanyIdForcedCancel = new BaseRequest<
  undefined,
  PostCompaniesCompanyIdForcedCancelResponse,
  PostCompaniesCompanyIdForcedCancelUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/forced_cancel",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
