/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostFeaturesResponse = Types.FeatureRes

export type PostFeaturesRequestBody = {
  feature: {
    name: string
    sourceType: 'company' | 'recruitment'
  }
}

export const postFeatures = new BaseRequest<
  PostFeaturesRequestBody,
  PostFeaturesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/features",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
