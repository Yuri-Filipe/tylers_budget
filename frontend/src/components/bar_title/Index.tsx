import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Types {
  text: string;
  borderRadius?: boolean;
}

const Index: React.FC<Types> = ({ text, borderRadius }) => {
  return (
    <View
      style={{
        ...styles.barTitle,
        borderBottomLeftRadius: borderRadius ? 10 : 0,
        borderBottomRightRadius: borderRadius ? 10 : 0,
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
export default Index;

export const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
  },
  barTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "100%",

    backgroundColor: "#87898A",
  },
});
