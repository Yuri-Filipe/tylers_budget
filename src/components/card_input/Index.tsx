import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../../store/ducks/types";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../card/Index";
import Date_Hour from "../../hooks/date_hour";

interface Types {
  SetQtd(value: number): void;
  SetObs(value: string): void;
  SetClient(value: string): void;
}

const Index: React.FC<Types> = ({ SetClient, SetObs, SetQtd }) => {
  const dispatch = useDispatch();
  const table_price = useSelector((state: StoreType) => state.table_price);
  const [price, setPrice] = useState(0);

  //Função para calcular o preço final do produto
  const changeQtd = (value: string) => {
    SetQtd(Number(value));
    setPrice(calcPrice(Number(value), table_price));
  };

  return (
    <View style={styles.container}>
      <View style={{...styles.topDate,
          justifyContent: "center",
      }}>
        <Text
          style={{
            fontSize: 16,
            color: "#F4FAF7",
          }}
        >
          {Date_Hour()[0]}
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
            {Date_Hour()[1]}
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

          <TextInput
            onChangeText={SetClient}
            placeholder="CLIENT"
            style={{
              marginLeft: 10,
              width: "85%",
              textTransform: "uppercase",
              fontSize: 16,
              color: "#0A1D20",
            }}
          ></TextInput>
        </View>
        <View style={styles.descrition}>
          <View style={styles.lines} />
          <TextInput
            placeholder="AMOUNT"
            onChangeText={changeQtd}
            keyboardType="numeric"
            style={styles.textDescription}
          ></TextInput>
          <Text style={styles.textDescription}>{`R$ ${price.toFixed(2)}`}</Text>
          <View style={{ ...styles.lines, marginTop: 4 }} />
          <TextInput
            onChangeText={SetObs}
            placeholder="NOTE"
            style={{ ...styles.textDescription, marginTop: 10, marginLeft: 10 }}
          ></TextInput>
        </View>
      </View>
    </View>
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
