/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type DeleteInvoicesInvoiceIdFilesFileIdUrlParams = {
  invoiceId: string
  fileId: string
} | undefined

export type DeleteInvoicesInvoiceIdFilesFileIdResponse = Types.InvoiceRes

export const deleteInvoicesInvoiceIdFilesFileId = new BaseRequest<
  undefined,
  DeleteInvoicesInvoiceIdFilesFileIdResponse,
  DeleteInvoicesInvoiceIdFilesFileIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/invoices/:invoiceId/files/:fileId",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
