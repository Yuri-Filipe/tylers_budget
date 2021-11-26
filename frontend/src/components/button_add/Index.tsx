import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface Types {
  color?: string;
  size?: number;
  name?: any;
  focused: true | false | null;
}

const Index: React.FC<Types> = ({ name, focused, size, color }) => {
  return (
    <View style={styles.container}>
      <Entypo name={name} focused={focused} color={color} size={size} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#05181C",
    alignItems: "center",
    justifyContent: "center",
    marginTop:-35,
    marginBottom: 0
  },
});
