/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteRecruitmentsIdUrlParams = {
  id: string
} | undefined

export const deleteRecruitmentsId = new BaseRequest<
  undefined,
  undefined,
  DeleteRecruitmentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/recruitments/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
