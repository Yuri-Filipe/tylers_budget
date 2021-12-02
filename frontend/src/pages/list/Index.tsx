import React, { useState, useCallback } from "react";
import Card from "../../components/card/Index";
import { ScrollView, View, Text, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { st } from "../home/Index";
import Bar_Title from "../../components/bar_title/Index";
import Snackbar from "../../components/snack_bar/Index";
import { StoreType } from "../../store/ducks/types";
import { table_pedidos, table_history } from "../../store/ducks/params";
import api from "../../services/api";
import useRefresh from "../../hooks/useRefresh/Index";
import { getDate } from "date-fns/esm";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: StoreType) => state.table_pedidos);
  const snack_bar = useSelector((state: StoreType) => state.snack_bar);
  const [refreshing, setRefreshing, get_data] = useRefresh("orders", false);
  return (
    <ScrollView
    fadingEdgeLength = {10}
      style={st.scrollView}
      refreshControl={
        <RefreshControl
          colors={["#fff"]}
          style={{
            backgroundColor: "#fff",
            marginTop: 20,
          }}
          progressBackgroundColor="#8a8887"
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            get_data();
          }}
        />
      }
    >
      <View style={st.view}>
        <Bar_Title text="ORDER LIST" />
        {state.map(
          ({ name, _id, date, hour, n_pedido, price, qtd, obs, completed }) => {
            return (
              <Card
                key={n_pedido}
                name={name}
                date={date}
                hour={hour}
                n_pedido={n_pedido}
                price={price}
                qtd={qtd}
                obs={obs}
                type_card="orders"
                completed={completed}
              />
            );
          }
        )}
      </View>
      {snack_bar && <Snackbar />}
    </ScrollView>
  );
};
export default List;
