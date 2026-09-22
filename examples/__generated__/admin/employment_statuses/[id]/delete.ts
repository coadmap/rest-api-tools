/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteEmploymentStatusesIdUrlParams = {
  id: string
} | undefined

export const deleteEmploymentStatusesId = new BaseRequest<
  undefined,
  undefined,
  DeleteEmploymentStatusesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/employment_statuses/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
