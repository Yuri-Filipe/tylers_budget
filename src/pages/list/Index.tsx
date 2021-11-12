import React from 'react';
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { styles } from "../home/Index";

const List: React.FC = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
      <Text>Page List</Text>
      </View>

    </ScrollView>
  );
};
export default List;
