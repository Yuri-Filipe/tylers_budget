import React, { useState, useEffect, SetStateAction, useRef } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../../store/ducks/types";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/button/Button";
import { styles } from "../card/Index";
import Date_Hour from "../../hooks/date_hour";
import { useForm, Controller } from "react-hook-form";
import {
  qtd_litros,
  snack_bar,
  snack_bar_text,
  syncing,
  table_pedidos,
} from "../../store/ducks/params";
import api from "../../services/api";
import { calc_queue } from "../../hooks/start/Index";

interface Types {}

const Index: React.FC<Types> = ({}) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState(0);
  const snack_bar_visible = useSelector((state: StoreType) => state.snack_bar);
  const pedidos = useSelector((state: StoreType) => state.table_pedidos);
  const table_price = useSelector((state: StoreType) => state.table_price);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const { control, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      name: "",
      qtd: "",
      obs: "",
    },
  });
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState<Array<string>>(["", ""]);

  //===========================================================================
  //FUNÇÕES

  async function onSubmit(value:any) {
    const { name, obs, qtd } = value;
    reset({
      name: "",
      qtd: "",
      obs: "",
    });
    setPrice(0)
    setLoading(true);
    setDisable(true);

    try {
      let { status, data } = await api.post(`/api/orders/send/table_orders`, {
        name: name,
        date: date[0],
        hour: date[1],
        n_pedido: 0,
        price: calcPrice(Number(qtd), table_price),
        qtd: qtd,
        obs: obs,
        completed: false,
      });

      if (status === 200) {
        let { code, value } = data;

        dispatch(table_pedidos(value));
        dispatch(qtd_litros(calc_queue(value)));
      }
      setTimeout(() => {
        dispatch(snack_bar_text("New order successfully added"));

        setLoading(false);
        setDisable(false);
        dispatch(snack_bar(true));
        setTimeout(() => {
          dispatch(snack_bar(false));
        }, 3000);
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setDisable(false);
      dispatch(snack_bar_text("Failed to add new order"));
      dispatch(snack_bar(true));
      setTimeout(() => {
        dispatch(snack_bar(false));
      }, 3000);
    }
  }

  //===========================================================================
  //EFEITOS

  // PARA CARREGAR A HORA
  useEffect(() => {
    const { _defaultValues } = control;
    const { name, obs, qtd } = control._fields;
    if (
      name?._f.value !== _defaultValues.name &&
      obs?._f.value !== _defaultValues.obs &&
      qtd?._f.value !== _defaultValues.qtd
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }

    // setDisable(false);
  }, [key]);

  useEffect(() => {
    let temp = Date_Hour();
    setDate(temp);
  }, []);

  //===========================================================================
  return (
    <>
      <View style={styles.container}>
        <View style={{ ...styles.topDate, justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 16,
              color: "#F4FAF7",
            }}
          >
            {date[0]}
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.topLine}>
            <Text
              style={{
                marginLeft: 10,
                color: "#E8F4EE",
              }}
            >
              {`# 0000`}
            </Text>

            <Text
              style={{
                marginLeft: 270,
                color: "#E8F4EE",
              }}
            >
              {date[1]}
            </Text>
          </View>
          <View style={styles.cardPeople}>
            <AntDesign
              name="user"
              size={30}
              color="#05181C"
              style={{
                marginLeft: 6,
              }}
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={(data) => {
                    onChange(data);                 
                    setKey(Math.floor(Math.random() * (50 - 1)) + 1);
                  }}
                  placeholder="CLIENT"
                  value={value}
                  style={{
                    marginLeft: 10,
                    width: "85%",
                    
                    fontSize: 16,
                    color: "#0A1D20",
                  }}
                ></TextInput>
              )}
              name="name"
            />
          </View>
          <View style={styles.descrition}>
            <View style={styles.lines} />

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(data) => {
                    onChange(data);
                    setPrice(calcPrice(Number(data), table_price));
                    setKey(Math.floor(Math.random() * (50 - 1)) + 1);
                  }}
                  placeholder="AMOUNT"
                  keyboardType="numeric"
                  style={styles.textDescription}
                ></TextInput>
              )}
              name="qtd"
            />

            <Text style={styles.textDescription}>{`R$ ${price.toFixed(
              2
            )}`}</Text>
            <View style={{ ...styles.lines, marginTop: 4 }} />

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(data) => {
                    onChange(data);
                    setKey(Math.floor(Math.random() * (50 - 1)) + 1);
                  }}
                  placeholder="NOTE"
                  style={{
                    ...styles.textDescription,
                    marginTop: 10,
                    marginLeft: 10,
                  }}
                ></TextInput>
              )}
              name="obs"
            />
          </View>
        </View>
      </View>

      <Button
        on_press={handleSubmit(onSubmit)}
        loading={loading}
        text="send"
        disabled={disable}
      />
    </>
  );
};

export default Index;

const calcPrice = (value: number, table_price: Array<number>) => {
  let price = 0;
  if (value < 5) {
    price = table_price[0];
  } else if (value >= 5 && value < 10) {
    price = table_price[1];
  } else if (value >= 10 && value < 20) {
    price = table_price[2];
  } else if (value >= 20) {
    price = table_price[3];
  }
  return value * price;
};
