/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostStatesResponse = Types.StateRes

export type PostStatesRequestBody = {
  state: {
    name?: string | undefined
  }
}

export const postStates = new BaseRequest<
  PostStatesRequestBody,
  PostStatesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/states",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
