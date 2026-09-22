/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetEmploymentsIdUrlParams = {
  id: string
} | undefined

export type GetEmploymentsIdResponse = Types.Employment

export type GetEmploymentsIdRequestBody = {
  inviteToken: string
}

export const getEmploymentsId = new BaseRequest<
  GetEmploymentsIdRequestBody,
  GetEmploymentsIdResponse,
  GetEmploymentsIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/employments/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
