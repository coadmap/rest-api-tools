/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchCompaniesCompanyIdStubIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdStubIdResponse = Types.CompanyRes

export type PatchCompaniesCompanyIdStubIdRequestBody = {
  company: {
    name?: string | undefined
    nameKana?: string | undefined
    yearOfEstablishment?: string | undefined
    headOfficeLocation?: string | undefined
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
    logo?: string | undefined
    /** 画像も投稿したい時はform-dataで投げて */
    cover?: string | undefined
    ownerId?: string | undefined
    employmentPlacementPermitNumber?: string | undefined
    featureIds?: string[] | undefined
    industryIds?: string[] | undefined
  }
}

export const patchCompaniesCompanyIdStubId = new BaseRequest<
  PatchCompaniesCompanyIdStubIdRequestBody,
  PatchCompaniesCompanyIdStubIdResponse,
  PatchCompaniesCompanyIdStubIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:companyId/stub/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
