import React from "react";
import Routes from "./routes/routes";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
const Index = () => {
  return (
    <>
      <StatusBar style={"light"} backgroundColor="#072120" />
      <Routes />
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#072120",
  },
});
