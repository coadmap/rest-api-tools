/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdMessagesUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdMessagesResponse = Types.MessagesRes

export type GetCompaniesCompanyIdMessagesQueryParams = {
  accountId: string
  page?: number | undefined
}

export const getCompaniesCompanyIdMessages = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdMessagesResponse,
  GetCompaniesCompanyIdMessagesUrlParams,
  GetCompaniesCompanyIdMessagesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/messages",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
