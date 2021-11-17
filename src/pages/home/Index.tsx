import React from "react";
import Card from '../../components/card/Index'
import { ScrollView, View, Text, StyleSheet } from "react-native";

const List: React.FC = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>

        {list.map((element)=>{
          return element
        })}


      </View>
    </ScrollView>
  );
};
export default List;

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#072120",
   
    
  },
  view: {
    backgroundColor: "#072120",
    marginTop:80,
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


const list = [
  <Card
    
  name="Yuri Felipe Valentim de Almeida"
  date="12 de novembro de 2021"
  hour="12:25"
  n_Pedido= {323}
  price= {1680}
  qtd= {56}
  obs= "Arrumar alguns galões de 5 litros"




  />,
  <Card
    
  name="Yuri Felipe Valentim de Almeida"
  date="12 de novembro de 2021"
  hour="12:25"
  n_Pedido= {323}
  price= {1680}
  qtd= {56}
  obs= "Arrumar alguns galões de 5 litros"




  />,
  <Card
    
  name="Yuri Felipe Valentim de Almeida"
  date="12 de novembro de 2021"
  hour="12:25"
  n_Pedido= {323}
  price= {1680}
  qtd= {56}
  obs= "Arrumar alguns galões de 5 litros"




  />,
  <Card
    
  name="Yuri Felipe Valentim de Almeida"
  date="12 de novembro de 2021"
  hour="12:25"
  n_Pedido= {323}
  price= {1680}
  qtd= {56}
  obs= "Arrumar alguns galões de 5 litros"




  />,
  <Card
    
  name="Yuri Felipe Valentim de Almeida"
  date="12 de novembro de 2021"
  hour="12:25"
  n_Pedido= {323}
  price= {1680}
  qtd= {56}
  obs= "Arrumar alguns galões de 5 litros"




  />
]