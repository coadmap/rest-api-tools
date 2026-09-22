/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetFeaturesResponse = Types.FeaturesRes

export type GetFeaturesQueryParams = {
  /** 「default」or「organizational」 */
  type?: 'default' | 'organizational' | undefined
  /** feature名を前方一致で検索 */
  keyword?: string | undefined
  /** 「company」or「recruitment」 */
  sourceType?: 'company' | 'recruitment' | undefined
}

export const getFeatures = new BaseRequest<
  undefined,
  GetFeaturesResponse,
  undefined,
  GetFeaturesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/features",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
