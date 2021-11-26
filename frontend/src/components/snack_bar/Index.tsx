import  React,{useState} from "react";
import { View, StyleSheet } from "react-native";
import { Paragraph, Dialog, Portal, Button } from 'react-native-paper';
import { useSelector, useDispatch } from "react-redux";
import { snack_bar } from "../../store/ducks/params";
import { StoreType } from "../../store/ducks/types";

const MyComponent = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState(true)
  const visible = useSelector((state: StoreType) => state.snack_bar);

  
  const showDialog = () => {dispatch(snack_bar(false));
  setstate(false)
  }
  const hideDialog = () => {dispatch(snack_bar(false));
  setstate(false)
  }

  return ( <Portal>
    <Dialog style = {styles.container}visible={state} onDismiss={hideDialog}>
      <Dialog.Content>
        <Paragraph >This is simple dialog</Paragraph>
        <Button labelStyle = {{
        color: "#fff"
      }} style = {styles.button}mode="contained" onPress = {hideDialog}>OK</Button>
      </Dialog.Content>
     
    </Dialog>
  </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "#fff",
    backgroundColor:"#62696B"
  },
  button:{
    width: "1%",
    height: 40,
    marginLeft:245,
    shadowColor:"#62696B",
    backgroundColor:"#62696B"
  }
});

export default MyComponent;
