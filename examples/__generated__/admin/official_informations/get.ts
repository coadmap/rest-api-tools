/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetOfficialInformationsResponse = Types.OfficialInformationsRes

export type GetOfficialInformationsQueryParams = {
  /** 公開中か */
  isReleased?: boolean | undefined
}

export const getOfficialInformations = new BaseRequest<
  undefined,
  GetOfficialInformationsResponse,
  undefined,
  GetOfficialInformationsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/official_informations",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
