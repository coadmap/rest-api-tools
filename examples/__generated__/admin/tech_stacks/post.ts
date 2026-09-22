/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostTechStackResponse = Types.TechStackRes

export type PostTechStackRequestBody = {
  techStack: {
    category: 'language' | 'framework' | 'infrastructure' | 'design_tool' | 'other'
    name: string
    /** 「public」or「private」 */
    accessibility: 'public' | 'private'
  }
}

export const postTechStack = new BaseRequest<
  PostTechStackRequestBody,
  PostTechStackResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/tech_stacks",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
