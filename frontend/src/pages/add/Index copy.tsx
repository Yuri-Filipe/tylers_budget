import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../../store/ducks/types";
import { st } from "../home/Index";
import Card_Input from "../../components/card_input/Index";
import Bar_Title from "../../components/bar_title/Index";
import Button from "../../components/button/Button";
import Snackbar from "../../components/snack_bar/Index";
import { syncing, table_pedidos } from "../../store/ducks/params";
import api from "../../services/api";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const table_price = useSelector((state: StoreType) => state.table_price);
  const snack_bar = useSelector((state: StoreType) => state.snack_bar);
  const [loading, setdisabled_button] = useState(false);
  const [disabled_button, set_disabled_button] = useState(true);
  const [client, setClient] = useState("");
  const [qtd, setQtd] = useState(0);
  const [obs, setObs] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(["", ""]);

  useEffect(() => {
    if (
      client !== "" &&
      qtd !== 0 &&
      obs !== "" &&
      //price !== 0 &&
      date !== ["", ""]
    ) {
      set_disabled_button(false);
    }
  }, [disabled_button, client, qtd, obs, price]);
  async function handlePress() {
    dispatch(syncing(true));

    try {
      let { status, data } = await api.post(`/api/orders/send/table_orders`, {
        name: client,
        date: date[1],
        hour: date[0],
        n_pedido: 3114,
        price: price,
        qtd: qtd,
        obs: obs,
        completed: false,
      });

      if (status === 200) {
        let { code, value } = data;

        dispatch(table_pedidos(value));
      }
      dispatch(syncing(false));
    } catch (error) {
      console.log(error);
      dispatch(syncing(false));
    }
  }
  return (
    <ScrollView style={st.scrollView}>
      <View style={st.view}>
        <Bar_Title text="ADD NEW ORDER" />
        <Card_Input
          SetQtd={setQtd}
          SetObs={setObs}
          SetClient={setClient}
          SetDate={setDate}
          SetPrice={setPrice}
          value ={ qtd}
        />
        <Button
          on_press={handlePress}
          loading={loading}
          text="send"
          disabled={disabled_button}
        />
      </View>
      {snack_bar && <Snackbar />}
    </ScrollView>
  );
};
export default List;
