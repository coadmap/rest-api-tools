/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostCompaniesCompanyIdRecruitmentsCsvImportUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdRecruitmentsCsvImportResponse = Types.RecruitmentsRes

export type PostCompaniesCompanyIdRecruitmentsCsvImportRequestBody = {
  file: File
}

export const postCompaniesCompanyIdRecruitmentsCsvImport = new BaseRequest<
  PostCompaniesCompanyIdRecruitmentsCsvImportRequestBody,
  PostCompaniesCompanyIdRecruitmentsCsvImportResponse,
  PostCompaniesCompanyIdRecruitmentsCsvImportUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/recruitments/csv_import",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
