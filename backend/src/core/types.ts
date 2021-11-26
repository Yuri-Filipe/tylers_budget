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
  snack_bar: true | false;
}
