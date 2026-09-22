/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostSkillsResponse = Types.SkillRes

export type PostSkillsRequestBody = {
  skill: {
    name: string
  }
}

export const postSkills = new BaseRequest<
  PostSkillsRequestBody,
  PostSkillsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/skills",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
