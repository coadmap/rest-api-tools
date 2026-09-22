/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostCompaniesCompanyIdScoutTicketsPayUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdScoutTicketsPayResponse = {
  requiresAction: boolean
  /** intentのclient_secret */
  paymentIntentClientSecret: string
}

export type PostCompaniesCompanyIdScoutTicketsPayRequestBody = {
  scoutTicket: {
    count: number
  }
}

export const postCompaniesCompanyIdScoutTicketsPay = new BaseRequest<
  PostCompaniesCompanyIdScoutTicketsPayRequestBody,
  PostCompaniesCompanyIdScoutTicketsPayResponse,
  PostCompaniesCompanyIdScoutTicketsPayUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/scout_tickets/pay",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
