/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdCompaniesUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdCompaniesResponse = Types.CompanyRes

export type PostCompaniesCompanyIdCompaniesRequestBody = {
  company: {
    name: string
    nameKana?: string | undefined
    headOfficeLocation?: string | undefined
    yearOfEstablishment?: string | undefined
    hpUrl?: string | undefined
    phone?: string | undefined
    capital?: number | undefined
    isListed?: boolean | undefined
    representative?: string | undefined
    representativeKana?: string | undefined
    netSales?: number | undefined
    numbersOfEmployees?: string | undefined
    averageAge?: number | undefined
    businessSummary?: string | undefined
    corporatePr?: string | undefined
    /** 画像も投稿したい時はform-dataで投げて */
    cover?: string | undefined
    /** 画像も投稿したい時はform-dataで投げて */
    logo?: File | undefined
    featureIds?: string[] | undefined
    industryIds?: string[] | undefined
  }
}

export const postCompaniesCompanyIdCompanies = new BaseRequest<
  PostCompaniesCompanyIdCompaniesRequestBody,
  PostCompaniesCompanyIdCompaniesResponse,
  PostCompaniesCompanyIdCompaniesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/companies",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
