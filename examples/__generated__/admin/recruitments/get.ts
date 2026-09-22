/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetRecruitmentsResponse = Types.RecruitmentsRes

export type GetRecruitmentsQueryParams = {
  /** 「社員採用（キャリア）」「副業・フリーランス（プロジェクト）」 */
  type?: 'career' | 'project' | undefined
  /** 「全体公開」「限定公開」「停止」「差し止め」 */
  accessibleType?: 'public' | 'private' | 'archived' | 'rejected' | undefined
  /** 契約期間 */
  term?: 'less_than_one_month' | 'one_to_three_months' | 'three_to_six_months' | 'more_than_six_months' | undefined
  /** 「自社募集」「他社募集」「クローリング募集」 */
  sourceType?: 'client' | 'agent' | 'service' | undefined
  /** キーワード検索 */
  keyword?: string | undefined
  /** 企業内フラグ（表向きには「校閲済み」や「重要」など） */
  organizationalChecked?: boolean | undefined
  /** adminフラグ（主にクローリング募集に対する「校閲済み」など） */
  adminChecked?: boolean | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscUpdatedAt?: boolean | undefined
}

export const getRecruitments = new BaseRequest<
  undefined,
  GetRecruitmentsResponse,
  undefined,
  GetRecruitmentsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/recruitments",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
