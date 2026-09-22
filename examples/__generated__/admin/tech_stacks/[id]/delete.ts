/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteTechStacksIdUrlParams = {
  id: string
} | undefined

export const deleteTechStacksId = new BaseRequest<
  undefined,
  undefined,
  DeleteTechStacksIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/tech_stacks/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
