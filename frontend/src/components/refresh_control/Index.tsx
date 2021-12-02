import React from "react";

import { RefreshControl } from "react-native";

interface Type {
  refreshing: boolean;
  onRefresh(): void;
}
const Index: React.FC<Type> = ({ refreshing, onRefresh }) => {
  return (
    <RefreshControl
      colors={["#fff"]}
      style={{
        backgroundColor: "#fff",
        marginTop: 20,
      }}
      progressBackgroundColor="#8a8887"
      refreshing={refreshing}
      onRefresh={()=>onRefresh()}
    />
  );
};

export default Index;
