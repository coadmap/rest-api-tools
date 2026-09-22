/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type PostOfficialInformationsResponse = Types.OfficialInformationRes

export type PostOfficialInformationsRequestBody = {
  officialInformation: {
    title?: string | undefined
    content?: string | undefined
    htmlContent?: string | undefined
    isReleased: boolean
  }
}

export const postOfficialInformations = new BaseRequest<
  PostOfficialInformationsRequestBody,
  PostOfficialInformationsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/official_informations",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
