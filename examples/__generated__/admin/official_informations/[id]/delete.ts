/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteOfficialInformationsIdUrlParams = {
  id: string
} | undefined

export const deleteOfficialInformationsId = new BaseRequest<
  undefined,
  undefined,
  DeleteOfficialInformationsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/official_informations/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
