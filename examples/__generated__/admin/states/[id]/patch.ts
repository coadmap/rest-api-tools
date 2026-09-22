/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchStatesIdUrlParams = {
  id: string
} | undefined

export type PatchStatesIdResponse = Types.StateRes

export type PatchStatesIdRequestBody = {
  state: {
    countryCode?: string | undefined
    name?: string | undefined
  }
}

export const patchStatesId = new BaseRequest<
  PatchStatesIdRequestBody,
  PatchStatesIdResponse,
  PatchStatesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/states/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
