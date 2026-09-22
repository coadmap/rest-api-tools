/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchSpecialtyCompanyTypesIdUrlParams = {
  id: string
} | undefined

export type PatchSpecialtyCompanyTypesIdResponse = Types.SpecialtyCompanyTypeRes

export type PatchSpecialtyCompanyTypesIdRequestBody = {
  specialtyCompanyType: {
    content?: string | undefined
  }
}

export const patchSpecialtyCompanyTypesId = new BaseRequest<
  PatchSpecialtyCompanyTypesIdRequestBody,
  PatchSpecialtyCompanyTypesIdResponse,
  PatchSpecialtyCompanyTypesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/specialty_company_types/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
