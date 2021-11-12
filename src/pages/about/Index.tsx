import React from "react";
import { styles } from "../home/Index";

import { ScrollView, View, Text, StyleSheet } from "react-native";
const List: React.FC = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
      <Text>Page About</Text>
      </View>

   
    </ScrollView>
  );
};
export default List;
