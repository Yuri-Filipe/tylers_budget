import React, {
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../../store/ducks/types";
import api from "../../services/api";
import {
  snack_bar_text,
  table_history,
  table_pedidos,
  snack_bar,
} from "../../store/ducks/params";

type Response = [boolean, Dispatch<SetStateAction<boolean>>, any];
export default function useRefresh(
  type_card: "orders" | "history",
  initialState: boolean
): Response {
  const dispatch = useDispatch();
  const snack_bar_visible = useSelector((state: StoreType) => state.snack_bar);
  const [refreshing, setRefreshing] = useState(initialState);
  const get_data = useCallback(() => {
    setRefreshing(true);
    async function fetch() {
      try {
        let response = await api.post(
          `/api/${type_card}/get/table_${type_card}`
        );

        if (response.status === 200) {
          let { code, value } = response.data;
          dispatch(snack_bar_text("Data updated successfully"));
          type_card === "orders"
            ? dispatch(table_pedidos(value))
            : dispatch(table_history(value));
        }
        setRefreshing(false);
        dispatch(snack_bar(true));
        setTimeout(() => {
          dispatch(snack_bar(false));
        }, 3000);
      } catch (error) {
        dispatch(snack_bar_text("Failed to update data"));
        console.log(error);
        setRefreshing(false);
        dispatch(snack_bar(true));
        setTimeout(() => {
          dispatch(snack_bar(false));
        }, 3000);
      }
    }
    fetch();
  }, [refreshing]);
  return [refreshing, setRefreshing, get_data];
}
