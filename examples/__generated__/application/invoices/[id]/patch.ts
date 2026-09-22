/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchInvoicesIdUrlParams = {
  id: string
} | undefined

export type PatchInvoicesIdResponse = Types.InvoiceRes

export type PatchInvoicesIdRequestBody = {
  invoice: {
    /** 請求日 */
    issuedDate?: string | undefined
    title?: string | undefined
    /** 支払期日 */
    deadline?: string | undefined
    /** 備考 */
    note?: string | undefined
    issuingStatus?: 'fixed' | 'draft' | 'withdrawn' | undefined
    /** 消費税計算方法 */
    consumptionTaxCalculationMethod?: 'floor' | 'ceil' | 'round' | undefined
    /** 源泉徴収税計算に消費税を含めるか */
    withholdingIncludedConsumptionTax?: boolean | undefined
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
      } | undefined
    }[] | undefined
    /** 合計金額 */
    amount?: number | undefined
    /** 請求番号 */
    number?: string | undefined
  }
}

export const patchInvoicesId = new BaseRequest<
  PatchInvoicesIdRequestBody,
  PatchInvoicesIdResponse,
  PatchInvoicesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/invoices/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
