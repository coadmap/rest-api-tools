/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostCompaniesResponse = Types.CompanyRes

export type PostCompaniesRequestBody = {
  company: {
    name: string
    nameKana: string
    headOfficeLocation: string
    yearOfEstablishment: string
    hpUrl?: string | undefined
    phone?: string | undefined
    capital: number
    isListed: boolean
    representative: string
    representativeKana: string
    netSales?: string | undefined
    numbersOfEmployees?: string | undefined
    averageAge?: number | undefined
    businessSummary: string
    corporatePr?: string | undefined
    /** 画像も投稿したい時はform-dataで投げて */
    cover?: string | undefined
    /** 画像も投稿したい時はform-dataで投げて */
    logo?: File | undefined
    featureIds?: string[] | undefined
    industryIds?: string[] | undefined
    employmentPlacementPermitNumber?: string | undefined
  }

  employment: {
    email: string
  }
}

export const postCompanies = new BaseRequest<
  PostCompaniesRequestBody,
  PostCompaniesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
