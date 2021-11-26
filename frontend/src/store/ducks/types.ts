//ACTIONS TYPES
export enum ActionsType {
  INITIAL_PARAMS = "INITIAL_PARAMS",
  TABLE_PEDIDOS = "TABLE_PEDIDOS",
  TABLE_PRICE = "TABLE_PRICE",
  TABLE_RECYCLE = "TABLE_RECYCLE",
  SERVER_STATUS = "SERVER_STATUS",
  QTD_PEDIDOS = "QTD_PEDIDOS",
  QTD_LITROS = "QTD_LITROS",
  SYNCING = "SYNCING",
  SNACK_BAR = "SNACK_BAR",
}

type Table_Pedidos = {
  name: string;
  date: string;
  n_pedido: number;
  hour: string;
  qtd: number;
  value: number;
  obs: string;
};
export interface StoreType {
  table_price: [number, number, number, number]; // 1, 5, 10, 20
  table_pedidos: Array<Table_Pedidos>;
  table_recycle: Array<Table_Pedidos>;
  server_status: true | false;
  qtd_pedidos: number;
  qtd_litros: number;
  syncing: true | false;
  snack_bar: true | false
}
