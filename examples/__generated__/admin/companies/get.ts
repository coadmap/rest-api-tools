/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetCompaniesResponse = Types.CompaniesRes

export type GetCompaniesRequestBody = {
}

export type GetCompaniesQueryParams = {
  /** 企業名 */
  keyword?: string | undefined
  /** 担当者名 */
  ownerKeyword?: string | undefined
  /** 通常orスタブ */
  type?: 'account' | 'stub' | undefined
  /** admin審査状態 */
  adminVerificationStatus?: 'unspecified' | 'request' | 'verified' | 'rejected' | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscUpdatedAt?: boolean | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscSubscribedAt?: boolean | undefined
  page?: number | undefined
}

export const getCompanies = new BaseRequest<
  GetCompaniesRequestBody,
  GetCompaniesResponse,
  undefined,
  GetCompaniesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
