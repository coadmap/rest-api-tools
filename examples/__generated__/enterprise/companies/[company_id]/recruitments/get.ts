/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdRecruitmentsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdRecruitmentsResponse = Types.RecruitmentsRes

export type GetCompaniesCompanyIdRecruitmentsQueryParams = {
  /** 「社員採用（キャリア）」「副業・フリーランス（プロジェクト）」 */
  type?: 'CareerRecruitment' | 'ProjectRecruitment' | undefined
  /** 「全体公開（誰でも見れる）」「非公開（許可した人のみ見れる）」 */
  accessibleType?: 'public' | 'private' | 'archived' | 'rejected' | undefined
  /** target_accountとその募集のWorkがあるか */
  targetAccountId?: string | undefined
  /** 「下書き」「公開」「停止」「強制停止」 */
  publishmentStatus?: 'draft' | 'published' | 'suspending' | 'terminated' | 'rejected' | undefined
  /** 職種 */
  occupationIds?: string[] | undefined
  /** 業種 */
  industryIds?: string[] | undefined
  /** 雇用形態 */
  employmentStatusIds?: string[] | undefined
  /** 「1ヵ月未満」「1ヵ月以上3ヵ月未満」「3ヵ月以上6ヵ月未満」「6ヵ月以上」 */
  term?: 'less_than_one_month' | 'one_to_three_months' | 'three_to_six_months' | 'more_than_six_months' | undefined
  /** 「自社募集」「他社募集」「クローリング募集」 */
  sourceType?: 'client' | 'agent' | 'service' | undefined
  /** キーワード検索 */
  keyword?: string | undefined
  /** 企業内フラグ（表向きには「校閲済み」や「重要」など） */
  organizationalChecked?: boolean | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscUpdatedAt?: boolean | undefined
  /** 発注と紐付けられた募集のみ（発注のフィルター用） */
  isJobOrdered?: boolean | undefined
  /** 業務と紐付けられた募集のみ（業務のフィルター用） */
  isJobed?: boolean | undefined
  /** サンプル除外 */
  exceptSample?: boolean | undefined
  page?: number | undefined
}

export const getCompaniesCompanyIdRecruitments = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRecruitmentsResponse,
  GetCompaniesCompanyIdRecruitmentsUrlParams,
  GetCompaniesCompanyIdRecruitmentsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/recruitments",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
