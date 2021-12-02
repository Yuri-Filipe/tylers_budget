import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import api from "../../services/api";
import {
  syncing,
  table_pedidos,
  table_history,
  snack_bar_text,
  snack_bar,
} from "../../store/ducks/params";

interface Types {
  type_card: "orders" | "history";
  n_pedido: number;
  completed: true | false;
}

const MyComponent: React.FC<Types> = ({ completed, type_card, n_pedido }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  async function send(completed: true | false) {
    dispatch(syncing(true));

    try {
      let { status, data } = await api.post(
        `/api/${type_card}/delete/table_${type_card}`,
        {
          n_pedido: n_pedido,
          completed: completed,
        }
      );

      if (status === 200) {
        let { code, value } = data;

        completed
          ? dispatch(snack_bar_text("Order completed successfully"))
          : dispatch(snack_bar_text("Order delete successfully"));

        type_card === "orders"
          ? dispatch(table_pedidos(value))
          : dispatch(table_history(value));
      }
      setTimeout(() => {
        dispatch(syncing(false));
        dispatch(snack_bar(true));
        setTimeout(() => {
          dispatch(snack_bar(false));
        }, 3000);
      }, 2000);
    } catch (error) {
      console.log(error);
      dispatch(syncing(false));
      completed
        ? dispatch(snack_bar_text("Failed to completed order"))
        : dispatch(snack_bar_text("Failed to delete order"));
      dispatch(snack_bar(true));
      setTimeout(() => {
        dispatch(snack_bar(false));
      }, 3000);
    }
  }

  return (
    <View
      style={{
        position: "relative",

        marginLeft: 63,
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        style={{}}
        anchor={
          <TouchableOpacity
            style={{
              marginLeft: 20,
              width: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
            }}
            onPress={openMenu}
          >
            <Ionicons name="ellipsis-vertical" size={20} color="#fff" />
          </TouchableOpacity>
        }
      >
        {type_card === "orders" && (
          <Menu.Item
            style={{}}
            icon="check"
            onPress={() => send(true)}
            title="completed"
          />
        )}
        <Menu.Item
          style={{}}
          icon="recycle"
          onPress={() => send(false)}
          title="delete"
        />
      </Menu>
    </View>
  );
};

export default MyComponent;
