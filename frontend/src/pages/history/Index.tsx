import React, { useState, useEffect } from "react";
import Card from "../../components/card/Index";
import { ScrollView, View, Text, RefreshControl } from "react-native";
import { st } from "../home/Index";
import Bar_Title from "../../components/bar_title/Index";
import Snackbar from "../../components/snack_bar/Index";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../../store/ducks/types";
import useRefresh from "../../hooks/useRefresh/Index";
import { table_history } from "../../store/ducks/params";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: StoreType) => state.table_history);
  const snack_bar = useSelector((state: StoreType) => state.snack_bar);
  const [refreshing, setRefreshing, get_data] = useRefresh("history", false);

  return (
    <ScrollView
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
          onRefresh={() => {setRefreshing(true); get_data()}}
        />
      }
    >
      <View style={st.view}>
        <Bar_Title text="HISTORY ORDERS" />
        {state.map(({ name, date, hour, n_pedido, price, qtd, _id, obs, completed }) => {
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
              type_card="history"
              completed = {completed}
            />
          );
        })}
      </View>
      {snack_bar && <Snackbar />}
    </ScrollView>
  );
};
export default List;
