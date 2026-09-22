/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostCompaniesCompanyIdJobOrdersUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdJobOrdersResponse = Types.JobOrderRes

export type PostCompaniesCompanyIdJobOrdersRequestBody = {
  jobOrder: {
    recruitmentId: string
    accountId: string
    /** 「下書き」「先方確認中」「締結済み」「却下」 */
    status: 'draft' | 'applied'
    /** 取引先名 */
    customerName?: string | undefined
    /** 業務名 */
    jobName: string
    /** 「稼働報酬制」「固定報酬制」 */
    feeType: 'time_based' | 'fixed'
    /** 稼働報酬制の単位（「一月あたり」「一日あたり」「一時間あたり」） */
    feeCalculationSpan?: 'monthly' | 'daily' | 'hourly' | undefined
    /** 稼働報酬制の金額 */
    unitTimeFee?: number | undefined
    /** 稼働報酬制の税率 */
    consumptionTaxId?: string | undefined
    jobServiceItems?: {
      jobServiceItem?: {
        /** 項目名 */
        description?: string | undefined
        /** 数量 */
        quantity?: number | undefined
        /** 単位 */
        unitLabel?: string | undefined
        /** 単価 */
        unitPrice?: number | undefined
        /** 消費税 */
        consumptionTaxId?: string | undefined
        /** 合計金額 */
        amount?: number | undefined
        isTargetWithholdingTax?: boolean | undefined
      } | undefined
    }[] | undefined
    /** 発注番号 */
    number?: string | undefined
    /** 発注日 */
    orderDate: string
    /** 開始日 */
    sinceDate: string
    /** 終了日 */
    untilDate: string
    /** 固定報酬制の合計金額 */
    fixedAmount?: number | undefined
    /** 仕事内容 */
    jobDescription: string
    /** 諸条件 */
    otherConditions: string
    /** 稼動報酬制の源泉徴収の対象か */
    isTargetWithholdingTax?: boolean | undefined
    /** 消費税計算方法 */
    consumptionTaxCalculationMethod: 'floor' | 'ceil' | 'round'
    /** 源泉徴収税計算に消費税を含めるか */
    withholdingIncludedConsumptionTax: boolean
    principalOrgUnitIds?: string[] | undefined
    principalEmploymentIds?: string[] | undefined
  }
}

export const postCompaniesCompanyIdJobOrders = new BaseRequest<
  PostCompaniesCompanyIdJobOrdersRequestBody,
  PostCompaniesCompanyIdJobOrdersResponse,
  PostCompaniesCompanyIdJobOrdersUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/companies/:companyId/job_orders",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
