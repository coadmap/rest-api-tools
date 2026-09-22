/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchCompaniesIdUrlParams = {
  id: string
} | undefined

export type PatchCompaniesIdResponse = Types.CompanyRes

export type PatchCompaniesIdRequestBody = {
  company: {
    headOfficeLocation?: string | undefined
    name?: string | undefined
    nameKana?: string | undefined
    yearOfEstablishment?: string | undefined
    hpUrl?: string | undefined
    phone?: string | undefined
    capital?: number | undefined
    isListed?: boolean | undefined
    representative?: string | undefined
    representativeKana?: string | undefined
    netSales?: string | undefined
    numbersOfEmployees?: string | undefined
    averageAge?: number | undefined
    featureIds?: string[] | undefined
    businessSummary?: string | undefined
    corporatePr?: string | undefined
    /** 画像も投稿したい時はform-dataで投げて */
    logo?: string | undefined
    /** 画像も投稿したい時はform-dataで投げて */
    cover?: string | undefined
    publicVerificationStatus?: 'unspecified' | 'requested' | 'verified' | 'rejected' | undefined
    employmentPlacementPermitNumber?: string | undefined
    recruitmentFeeRatio?: number | undefined
    introductionFeeRatio?: number | undefined
    industryIds?: string[] | undefined
  }
}

export const patchCompaniesId = new BaseRequest<
  PatchCompaniesIdRequestBody,
  PatchCompaniesIdResponse,
  PatchCompaniesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/companies/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
