/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PatchInvoicesInvoiceIdFilesUrlParams = {
  invoiceId: string
} | undefined

export type PatchInvoicesInvoiceIdFilesResponse = Types.InvoiceRes

export type PatchInvoicesInvoiceIdFilesRequestBody = {
  files: File[]
}

export const patchInvoicesInvoiceIdFiles = new BaseRequest<
  PatchInvoicesInvoiceIdFilesRequestBody,
  PatchInvoicesInvoiceIdFilesResponse,
  PatchInvoicesInvoiceIdFilesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/invoices/:invoiceId/files",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
