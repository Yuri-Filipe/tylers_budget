import { StoreType, ActionsType } from "./types";
import { Reducer } from "redux";

const initialState: StoreType = {
  server_status: false,
  table_price: [0, 0, 0, 0],
  table_pedidos: [],
  table_history: [],
  qtd_litros: 0,
  qtd_pedidos: 0,
  syncing: false,
  snack_bar:false,
  snack_bar_text:"",
  last_order:0
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
    case ActionsType.TABLE_HISTORY:
      return {
        ...state,
        table_history: action.payload,
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
      case ActionsType.SNACK_BAR_TEXT:  
      return {
        ...state,
        snack_bar_text: action.payload,
      };
      case ActionsType.LAST_ORDER:  
      return {
        ...state,
        last_order: action.payload,
      };
    default:
      return state;
  }
};

export default Params;
