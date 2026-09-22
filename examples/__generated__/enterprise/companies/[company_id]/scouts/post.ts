/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdScoutsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdScoutsResponse = Types.ScoutsRes

export type PostCompaniesCompanyIdScoutsRequestBody = {
  scout: {
    title: string
    message: string
    type: 'CareerScout' | 'ProjectScout'
    autoRemainderPeriod: 'nothing' | 'three_days' | 'five_days' | 'seven_days'
    /** auto_remainder_periodがnothing以外であれば必須 */
    autoRemainderTemplateId?: string | undefined
    receiverIds: string[]
    /** 渡すとMessageに紐付けられる */
    recruitmentIds?: string[] | undefined
    principalOrgUnitIds?: string[] | undefined
    principalEmploymentIds?: string[] | undefined
  }
}

export const postCompaniesCompanyIdScouts = new BaseRequest<
  PostCompaniesCompanyIdScoutsRequestBody,
  PostCompaniesCompanyIdScoutsResponse,
  PostCompaniesCompanyIdScoutsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/scouts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
