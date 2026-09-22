/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteHopesIdUrlParams = {
  id: string
} | undefined

export const deleteHopesId = new BaseRequest<
  undefined,
  undefined,
  DeleteHopesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/hopes/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
