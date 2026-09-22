/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetOfficialInformationsIdUrlParams = {
  id: string
} | undefined

export type GetOfficialInformationsIdResponse = Types.OfficialInformationRes

export const getOfficialInformationsId = new BaseRequest<
  undefined,
  GetOfficialInformationsIdResponse,
  GetOfficialInformationsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/official_informations/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
