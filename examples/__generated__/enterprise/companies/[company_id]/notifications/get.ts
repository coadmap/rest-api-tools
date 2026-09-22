/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdNotificationsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdNotificationsResponse = Types.NotificationsRes

export type GetCompaniesCompanyIdNotificationsRequestBody = {
}

export type GetCompaniesCompanyIdNotificationsQueryParams = {
  notificationType?: 'general' | 'message' | undefined
  isRead?: boolean | undefined
  page?: number | undefined
}

export const getCompaniesCompanyIdNotifications = new BaseRequest<
  GetCompaniesCompanyIdNotificationsRequestBody,
  GetCompaniesCompanyIdNotificationsResponse,
  GetCompaniesCompanyIdNotificationsUrlParams,
  GetCompaniesCompanyIdNotificationsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/notifications",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
