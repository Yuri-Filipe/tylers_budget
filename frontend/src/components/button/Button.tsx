import React from "react";
import { Button } from "react-native-paper";

interface Types {
  route?: any;
  on_press(): void;
  text?: string;
  loading: true | false;
  disabled:true | false;
}

const Index: React.FC<Types> = ({ on_press, loading, text,disabled }) => {
  return (
    <Button
      loading={loading}
      style={{
        marginTop: 20,
        width: "30%",
        display: "flex",
        justifyContent: "space-around",
        alignContent: "space-around",
      }}

      
      contentStyle={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
      dark
      disabled = {disabled}
      color="#44A773"
      icon="send"
      mode="contained"
      onPress={on_press}
    >
      {text}
    </Button>
  );
};

export default Index;
