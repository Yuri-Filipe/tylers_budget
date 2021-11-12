import React from "react";

import { ScrollView, View, Text, StyleSheet } from "react-native";

const List: React.FC = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
        <Text style={styles.text}>Page Home</Text>
      </View>
    </ScrollView>
  );
};
export default List;

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#072120",
    flex: 1, 
    
  },
  view: {
    backgroundColor: "#072120",
    height: 800,
    marginTop:40,
    width: "100%",
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    color:"#fff",
    fontSize: 20,
  },
});
