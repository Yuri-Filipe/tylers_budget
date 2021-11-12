import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Types {
  route: any;
  text: string;
  
}

const Index: React.FC<Types> = ({ route, text }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>{text}</Text>
      <Button
        title="button"
        onPress={() => navigation.navigate(route)}
      ></Button>
    </View>
  );
};

export default Index;
