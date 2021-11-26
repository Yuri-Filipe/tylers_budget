import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { snack_bar } from "../../store/ducks/params";

interface Types {
  route: any;
  text: string;
}

const Index: React.FC<Types> = ({ route, text }) => {
  const dispatch = useDispatch();

  return (
    <Button
      loading
      style={{
        marginTop: 20,
        width: "50%",
        display: "flex",
        justifyContent: "space-around",
        alignContent: "space-around",
      }}
      contentStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      dark
      color="#44A773"
      icon="adduser"
      mode="contained"
      onPress={() => {
        dispatch(snack_bar(true));
      }}
    >
      send
    </Button>
  );
};

export default Index;
