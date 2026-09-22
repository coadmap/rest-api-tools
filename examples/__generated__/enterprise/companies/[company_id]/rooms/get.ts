/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdRoomsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdRoomsResponse = Types.RoomsRes

export type GetCompaniesCompanyIdRoomsQueryParams = {
  page?: number | undefined
}

export const getCompaniesCompanyIdRooms = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRoomsResponse,
  GetCompaniesCompanyIdRoomsUrlParams,
  GetCompaniesCompanyIdRoomsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/rooms",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
