/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetStatesResponse = Types.StatesRes

export const getStates = new BaseRequest<
  undefined,
  GetStatesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/states",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
