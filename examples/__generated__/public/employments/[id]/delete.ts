/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteEmploymentsIdUrlParams = {
  id: string
} | undefined

export type DeleteEmploymentsIdRequestBody = {
  inviteToken: string
}

export const deleteEmploymentsId = new BaseRequest<
  DeleteEmploymentsIdRequestBody,
  undefined,
  DeleteEmploymentsIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "delete",
  baseURL: API_HOST,
  path: "/employments/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
