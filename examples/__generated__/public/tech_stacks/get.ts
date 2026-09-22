/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetTechStackResponse = Types.TechStacksRes

export type GetTechStackQueryParams = {
  /** カテゴリーで検索 */
  category?: 'language' | 'framework' | 'infrastructure' | 'design_tool' | 'other' | undefined
  /** tech_stack名を前方一致で検索 */
  keyword?: string | undefined
  /** 「public」or「private」 */
  accessibility?: 'public' | 'private' | undefined
}

export const getTechStack = new BaseRequest<
  undefined,
  GetTechStackResponse,
  undefined,
  GetTechStackQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/tech_stacks",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
