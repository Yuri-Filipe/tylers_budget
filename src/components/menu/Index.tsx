import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View
      style={{
        position: "relative",
        
        marginLeft:63
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        style={{
                                  }}
        anchor={
          <Button
            color="#fff"
            contentStyle={{
              backgroundColor: "#44A773",
              marginLeft:40
            }}
            style={{
              backgroundColor: "#44A773",
              width: 2,
              display: "flex",
             
        
            }}
            icon="dots-vertical"
            onPress={openMenu}
          />
        }
      >
        <Menu.Item
          style={{
 
          }}
          icon = "recycle"
          onPress={() => {}}
          title="DELETE"
        />
     
      </Menu>
    </View>
  );
};

export default MyComponent;

