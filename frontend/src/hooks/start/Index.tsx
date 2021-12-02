import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import {
  syncing,
  table_pedidos,
  table_price,
  table_history,
  qtd_litros,
  snack_bar_text,
  snack_bar,
} from "../../store/ducks/params";
import { StoreType, Table_Pedidos } from "../../store/ducks/types";

const Index = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState("");

  useEffect(() => {
    async function fetch() {
      dispatch(syncing(true));
      try {
        let { status, data } = await api.post("/api/orders/get/table_orders");
        if (status === 200) {
          let { code, value } = data;
          dispatch(table_pedidos(value));
          dispatch(qtd_litros(calc_queue(value)));
        }
        let response = await api.post("/api/history/get/table_history");
        if (response.status === 200) {
          let { code, value } = response.data;
          dispatch(table_history(value));
        }
        let res = await api.post("/api/price/get/table_price");
        if (res.status === 200) {
          let { code, value } = res.data;
          dispatch(table_price(value[0].value));
        }
        dispatch(snack_bar_text("Data updated successfully"));

        setTimeout(() => {
          dispatch(syncing(false));
          dispatch(snack_bar(true));
          setTimeout(() => {
            dispatch(snack_bar(false));
          }, 3000);
        }, 3000);
      } catch (error) {
        console.log(error);
        dispatch(snack_bar_text("Failed to connect to server"));
        dispatch(syncing(false));
        dispatch(snack_bar(true));
        setTimeout(() => {
          dispatch(snack_bar(false));
        }, 3000);
      }
    }
    fetch();
  }, []);

  return state;
};

export default Index;

export const calc_queue = (arr: Array<Table_Pedidos>) => {
  let tmp: number = 0;
  arr.forEach((value) => {
    tmp += value.qtd;
  });
  return tmp;
};
