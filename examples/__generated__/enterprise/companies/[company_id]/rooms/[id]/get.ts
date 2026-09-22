/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdRoomsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdRoomsIdResponse = Types.RoomRes

export type GetCompaniesCompanyIdRoomsIdQueryParams = {
}

export const getCompaniesCompanyIdRoomsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRoomsIdResponse,
  GetCompaniesCompanyIdRoomsIdUrlParams,
  GetCompaniesCompanyIdRoomsIdQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/rooms/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
