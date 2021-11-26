import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";
import { StoreType } from "../../store/ducks/types";
import { syncing } from "../../store/ducks/params";

const Index = () => {
  const dispatch = useDispatch()
  const visible = useSelector((state:StoreType) => state.syncing)
 
  return (
    <View>
      <Portal>
        <Dialog
          style={{
            backgroundColor: "#87898A",
          }}
          visible={visible}
       
        >
          <Dialog.Title
            style={{
              color: "#fff",
            }}
          >
            Wait...
          </Dialog.Title>
          <Dialog.Content
            style={{
              display: "flex",

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Button loading color="#44A773" />
            <Paragraph
              style={{
                color: "#fff",
              }}
            >
              Syncing data
            </Paragraph>
          </Dialog.Content>
        
        </Dialog>
      </Portal>
    </View>
  );
};

export default Index;
