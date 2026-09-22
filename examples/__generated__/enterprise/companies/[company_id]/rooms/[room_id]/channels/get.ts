/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../../shared/index";
import { API_HOST } from "../../../../../urls";

export type GetCompaniesCompanyIdRoomsRoomIdChannelsUrlParams = {
  companyId: string
  roomId: string
} | undefined

export type GetCompaniesCompanyIdRoomsRoomIdChannelsResponse = Types.ChannelsRes

export type GetCompaniesCompanyIdRoomsRoomIdChannelsQueryParams = {
  /** page */
  page?: number | undefined
}

export const getCompaniesCompanyIdRoomsRoomIdChannels = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRoomsRoomIdChannelsResponse,
  GetCompaniesCompanyIdRoomsRoomIdChannelsUrlParams,
  GetCompaniesCompanyIdRoomsRoomIdChannelsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/rooms/:roomId/channels",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
