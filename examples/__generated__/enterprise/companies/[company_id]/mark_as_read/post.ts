/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdMarkAsReadUrlParams = {
  companyId: string
} | undefined

export const postCompaniesCompanyIdMarkAsRead = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdMarkAsReadUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/mark_as_read",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
