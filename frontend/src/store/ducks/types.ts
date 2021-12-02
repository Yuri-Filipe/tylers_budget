//ACTIONS TYPES
export enum ActionsType {
  INITIAL_PARAMS = "INITIAL_PARAMS",
  TABLE_PEDIDOS = "TABLE_PEDIDOS",
  TABLE_PRICE = "TABLE_PRICE",
  TABLE_HISTORY = "TABLE_HISTORY",
  SERVER_STATUS = "SERVER_STATUS",
  QTD_PEDIDOS = "QTD_PEDIDOS",
  QTD_LITROS = "QTD_LITROS",
  SYNCING = "SYNCING",
  SNACK_BAR = "SNACK_BAR",
  SNACK_BAR_TEXT = "SNACK_BAR_TEXT",
  LAST_ORDER = "LAST_ORDER",
}

export type Table_Pedidos = {
  name: string;
  _id: string;
  date: string;
  n_pedido: number;
  hour: string;
  qtd: number;
  price: number;
  obs: string;
  completed: true | false;
};
export interface StoreType {
  table_price: [number, number, number, number]; // 1, 5, 10, 20
  table_pedidos: Array<Table_Pedidos>;
  table_history: Array<Table_Pedidos>;
  server_status: true | false;
  qtd_pedidos: number;
  qtd_litros: number;
  syncing: true | false;
  snack_bar: true | false;
  snack_bar_text: string;
  last_order: number;
}
