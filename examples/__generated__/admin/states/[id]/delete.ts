/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteStatesIdUrlParams = {
  id: string
} | undefined

export const deleteStatesId = new BaseRequest<
  undefined,
  undefined,
  DeleteStatesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/states/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
