/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchOfficialInformationsIdUrlParams = {
  id: string
} | undefined

export type PatchOfficialInformationsIdResponse = Types.OfficialInformationRes

export type PatchOfficialInformationsIdRequestBody = {
  officialInformation: {
    title?: string | undefined
    content?: string | undefined
    htmlContent?: string | undefined
    isReleased?: boolean | undefined
  }
}

export const patchOfficialInformationsId = new BaseRequest<
  PatchOfficialInformationsIdRequestBody,
  PatchOfficialInformationsIdResponse,
  PatchOfficialInformationsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/official_informations/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
