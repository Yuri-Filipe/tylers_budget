import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Paragraph, Dialog, Portal } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { snack_bar } from "../../store/ducks/params";
import { StoreType } from "../../store/ducks/types";

const MyComponent = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState(true);
  const snack_bar_text = useSelector((state: StoreType) => state.snack_bar_text);

  const showDialog = () => {
    dispatch(snack_bar(false));
    setstate(false);
  };
  const hideDialog = () => {
    dispatch(snack_bar(false));
    setstate(false);
  };

  return (
    <Portal>
      <Dialog style={st.container} visible={state} onDismiss={hideDialog}>
        <Dialog.Content>
          <Paragraph>{snack_bar_text}</Paragraph>
          <TouchableOpacity onPress = {hideDialog} style={st.button}>
            <Text style={st.t_button}>OK</Text>
          </TouchableOpacity>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

const st = StyleSheet.create({
  container: {
    color: "#fff",
    backgroundColor: "#62696B",
  },
  button: {
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:3,
    width: 50,
    height: 30,
    marginLeft: 245,
    shadowColor: "#62696B",
    backgroundColor: "#62696B",
  },
  t_button: {
    color: "#fff",
  },
});

export default MyComponent;
