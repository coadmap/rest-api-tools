/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteBlockCompaniesUrlParams = {
  companyId: string
} | undefined

export const deleteBlockCompanies = new BaseRequest<
  undefined,
  undefined,
  DeleteBlockCompaniesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/block_companies/:companyId",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
