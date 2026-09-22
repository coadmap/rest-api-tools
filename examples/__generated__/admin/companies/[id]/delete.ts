/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteCompaniesIdUrlParams = {
  id: string
} | undefined

export type DeleteCompaniesIdResponse = Types.CompanyRes

export const deleteCompaniesId = new BaseRequest<
  undefined,
  DeleteCompaniesIdResponse,
  DeleteCompaniesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
