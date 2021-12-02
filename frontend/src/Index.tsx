import React,{useEffect} from "react";
import Routes from "./routes/routes";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Start from "./hooks/start/Index";

const Index = () => {
  Start()
  return (
    <>
      
      <StatusBar style={"dark"} backgroundColor="#8a8887" />
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
