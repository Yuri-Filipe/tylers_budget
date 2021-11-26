import { ActionsType } from "./types";
import { action } from "typesafe-actions";

export const initial_params = () => action(ActionsType.INITIAL_PARAMS);
export const table_pedidos = (data: any) => action(ActionsType.TABLE_PEDIDOS, data);
export const table_price = (data: any) => action(ActionsType.TABLE_PRICE, data);
export const table_recycle = (data: any) => action(ActionsType.TABLE_RECYCLE, data);
export const qtd_litros = (data: any) => action(ActionsType.QTD_LITROS, data);
export const qtd_pedidos = (data: any) => action(ActionsType.QTD_PEDIDOS, data);
export const server_status = (data: any) => action(ActionsType.SERVER_STATUS, data);
export const syncing = (data: any) => action(ActionsType.SYNCING, data);
export const snack_bar = (data: any) => action(ActionsType.SNACK_BAR, data);