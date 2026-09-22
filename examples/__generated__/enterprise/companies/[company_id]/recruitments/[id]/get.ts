/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type GetCompaniesCompanyIdRecruitmentsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdRecruitmentsIdResponse = Types.RecruitmentRes

export const getCompaniesCompanyIdRecruitmentsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRecruitmentsIdResponse,
  GetCompaniesCompanyIdRecruitmentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/recruitments/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
