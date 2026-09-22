/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostJobsJobIdInvoicesUrlParams = {
  jobId: string
} | undefined

export type PostJobsJobIdInvoicesResponse = Types.InvoiceRes

export type PostJobsJobIdInvoicesRequestBody = {
  invoice: {
    /** 請求日 */
    issuedDate?: string | undefined
    title: string
    /** 支払期日 */
    deadline?: string | undefined
    /** 備考 */
    note?: string | undefined
    issuingStatus?: 'fixed' | 'draft' | 'withdrawn' | undefined
    /** 消費税計算方法 */
    consumptionTaxCalculationMethod: 'floor' | 'ceil' | 'round'
    /** 源泉徴収税計算に消費税を含めるか */
    withholdingIncludedConsumptionTax: boolean
    invoiceDetailedItems?: {
      invoiceDetailedItem?: {
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
        /** 金額 */
        amount?: number | undefined
        /** 稼動報酬制の源泉徴収の対象か */
        isTargetWithholdingTax?: boolean | undefined
      } | undefined
    }[] | undefined
    /** 合計金額 */
    amount: number
    /** 請求番号(発注番号と同じで任意の値) */
    number?: string | undefined
  }
}

export const postJobsJobIdInvoices = new BaseRequest<
  PostJobsJobIdInvoicesRequestBody,
  PostJobsJobIdInvoicesResponse,
  PostJobsJobIdInvoicesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/jobs/:jobId/invoices",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
