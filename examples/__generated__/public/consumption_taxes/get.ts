/* eslint-disable */
import { BaseRequest } from "@coadmap/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetConsumptionTaxesResponse = {
  consumptionTaxes: Types.ConsumptionTax[]
}

export const getConsumptionTaxes = new BaseRequest<
  undefined,
  GetConsumptionTaxesResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/consumption_taxes",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
