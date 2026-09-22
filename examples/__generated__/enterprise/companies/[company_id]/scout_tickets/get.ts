/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdScoutTicketsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdScoutTicketsResponse = Types.ScoutTicketsRes

export const getCompaniesCompanyIdScoutTickets = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdScoutTicketsResponse,
  GetCompaniesCompanyIdScoutTicketsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/scout_tickets",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
