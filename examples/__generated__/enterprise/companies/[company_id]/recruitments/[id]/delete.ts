/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type DeleteCompaniesCompanyIdRecruitmentsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdRecruitmentsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdRecruitmentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/recruitments/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
