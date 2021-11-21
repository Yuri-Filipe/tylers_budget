import { StoreType, ActionsType } from "./types";
import { Reducer } from "redux";

const initialState: StoreType = {
  server_status: false,
  table_price: [35, 34, 33, 30],
  table_pedidos: [],
  table_recycle: [],
  qtd_litros: 0,
  qtd_pedidos: 0,
  syncing: false,
  snack_bar:false
};

const Params: Reducer<StoreType> = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.INITIAL_PARAMS:
      return {
        ...initialState,
      };
    case ActionsType.TABLE_PRICE:
      return {
        ...state,
        table_price: action.payload,
      };
    case ActionsType.TABLE_PEDIDOS:
      return {
        ...state,
        table_pedidos: action.payload,
      };
    case ActionsType.TABLE_RECYCLE:
      return {
        ...state,
        table_recycle: action.payload,
      };
    case ActionsType.QTD_LITROS:
      return {
        ...state,
        qtd_litros: action.payload,
      };
    case ActionsType.QTD_LITROS:
      return {
        ...state,
        qtd_litros: action.payload,
      };
    case ActionsType.QTD_PEDIDOS:
      return {
        ...state,
        qtd_pedidos: action.payload,
      };
    case ActionsType.SYNCING:
      return {
        ...state,
        syncing: action.payload,
      };
      case ActionsType.SNACK_BAR:  
      return {
        ...state,
        snack_bar: action.payload,
      };
    default:
      return state;
  }
};

export default Params;
