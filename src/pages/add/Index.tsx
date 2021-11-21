import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../../store/ducks/types";
import { styles } from "../home/Index";
import Card_Input from "../../components/card_input/Index";
import Bar_Title from "../../components/bar_title/Index";
import Button from "../../components/button/Button";
import  Snackbar  from "../../components/snack_bar/Index";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const table_price = useSelector((state: StoreType) => state.table_price);
  const [client, setClient] = useState("");
  const [qtd, setQtd] = useState(0);
  const [obs, setObs] = useState("");

  const handlePress = () => {
    console.log("Pressed!");
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
        <Bar_Title  text="ADD NEW ORDER" />
        <Card_Input SetQtd={setQtd} SetObs={setObs} SetClient={setClient} />
        <Button />
   
      </View>
      <Snackbar/>
    </ScrollView>
  );
};
export default List;
