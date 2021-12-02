import React from "react";
import { st } from "../home/Index";

import { ScrollView, View, Text, StyleSheet } from "react-native";
const List: React.FC = () => {
  return (
    <ScrollView
      style={{
        ...st.scrollView,
      }}
    >
      <View
        style={{
          ...st.view,
          marginTop: "70%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{...st2.text,fontSize:30, letterSpacing:3}}>PROJETO T.Y.L.E.R.S</Text>
        <Text style={st2.text}>BUDGET APP 1.0.0</Text>
        <Text style={st2.text}>2021 @ TODOS OS DIREITOS RESERVADOS</Text>
      </View>
    </ScrollView>
  );
};
export default List;

const st2 = StyleSheet.create({
  text: {
    fontFamily:"",
    marginTop: 30,
    color: "#87898A",
  },
});
