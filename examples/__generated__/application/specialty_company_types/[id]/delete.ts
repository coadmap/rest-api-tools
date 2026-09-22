/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteSpecialtyCompanyTypesIdUrlParams = {
  id: string
} | undefined

export const deleteSpecialtyCompanyTypesId = new BaseRequest<
  undefined,
  undefined,
  DeleteSpecialtyCompanyTypesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/specialty_company_types/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
