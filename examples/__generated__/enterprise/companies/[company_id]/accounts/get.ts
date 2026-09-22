/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesIdAccountsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesIdAccountsResponse = Types.AccountsRes

export type GetCompaniesIdAccountsQueryParams = {
  /** 検索キーワード */
  keyword?: string | undefined
  /** 在籍企業名 */
  currentCompanyName?: string | undefined
  /** 役職・部署 */
  positionName?: string | undefined
  /** 職種 */
  'occupationHistories[][occupationId]'?: string | undefined
  /** 職種の経験年数（指定しなかった場合、0になる） */
  'occupationHistories[][yearOfOccupationExperience]'?: string | undefined
  /** 業種 */
  'industryHistories[][industryId]'?: string | undefined
  /** 業種の経験年数（指定しなかった場合、0になる） */
  'industryHistories[][yearOfIndustryExperience]'?: string | undefined
  /** 最終ログイン日時, この日付以降にログインしてる */
  lastSignInAt?: 'within_one_day' | 'within_one_week' | 'within_one_month' | undefined
  /** 就労状況 */
  employmentStatus?: 'employed' | 'unemployed' | undefined
  /** スキル */
  skillIds?: string[] | undefined
  /** 性別 */
  gender?: 'male' | 'female' | 'other' | undefined
  /** 学歴 */
  academicBackground?: 'graduate_school_doctor' | 'graduate_school_master' | 'university' | 'technical_college' | 'vocational_school' | 'junior_college' | 'high_school' | undefined
  /** 英語力 */
  englishSkill?: 'daily_conversation' | 'business_conversation' | 'native' | undefined
  /** 日本語力 */
  japaneseSkill?: 'daily_conversation' | 'business_conversation' | 'native' | undefined
  /** 現在の都道府県 */
  currentStateIds?: string[] | undefined
  /** 配偶者 */
  maritalStatus?: 'single' | 'married' | undefined
  /** スカウト設定 */
  scoutSettings?: ('career' | 'project')[] | undefined
  /** 弊社への関心 */
  interestedInCompany?: boolean | undefined
  /** 弊社の募集への関心 */
  interestedInRecruitment?: boolean | undefined
  /** 最低直近収入 */
  minRecentIncomeAmount?: number | undefined
  /** 最高直近収入 */
  maxRecentIncomeAmount?: number | undefined
  /** 転職回数 */
  numberOfJobChanges?: 'unspecified' | 'nothing' | 'one' | 'two' | 'three' | 'four' | undefined
  /** 転職希望時期・案件開始時期 */
  timeToChangeJob?: string | undefined
  /** 最低年齢 */
  minAge?: number | undefined
  /** 最高年齢 */
  maxAge?: number | undefined
  /** マネジメント経験人数 */
  managementExperience?: 'everything' | 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | undefined
  /** 職務経歴更新日 */
  cvUpdatedIn?: 'three_day' | 'one_week' | 'one_month' | 'three_month' | 'half_year' | undefined
  /** キーワードOR検索するか */
  keywordOr?: boolean | undefined
  /** 在籍企業名OR検索するか */
  currentCompanyNameOr?: boolean | undefined
  /** 役職・部署をOR検索するか */
  positionNameOr?: boolean | undefined
  /** 自分が送ったスカウト */
  scoutFromMine?: boolean | undefined
  /** 他の社員が送ったスカウト */
  scoutFromOther?: boolean | undefined
  /** 足跡 */
  recruitmentPageView?: boolean | undefined
  /** 希望最低年収 */
  hopingMinIncomeAmount?: number | undefined
  /** 希望最高年収 */
  hopingMaxIncomeAmount?: number | undefined
  /** 希望職種 */
  hopingOccupationIds?: string[] | undefined
  /** 希望業種 */
  hopingIndustryIds?: string[] | undefined
  /** 希望勤務地 */
  hopingStateIds?: string[] | undefined
  /** 最終ログイン日時でソート(true->昇順, false->降順) */
  sortAscLastSignInAt?: boolean | undefined
  /** プロフィール更新日時でソート(true->昇順, false->降順) */
  sortAscProfileUpdatedAt?: boolean | undefined
  /** pagenationのpageナンバー */
  'page'?: number | undefined
}

export const getCompaniesIdAccounts = new BaseRequest<
  undefined,
  GetCompaniesIdAccountsResponse,
  GetCompaniesIdAccountsUrlParams,
  GetCompaniesIdAccountsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/accounts",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
