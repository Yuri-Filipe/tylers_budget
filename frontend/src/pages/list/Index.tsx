import React from "react";
import Card from '../../components/card/Index'
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { styles } from "../home/Index";
import Bar_Title from "../../components/bar_title/Index";
import  Snackbar  from "../../components/snack_bar/Index";

const List: React.FC = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
      <Bar_Title   text = "ORDER LIST"/>
        {list.map(({ name,
          date,
          hour,
          n_Pedido,
          price,
          qtd,
          obs})=>{
          return  <Card
          key= {n_Pedido}
          name={name}
          date={date}
          hour={hour}
          n_Pedido= {n_Pedido}
          price= {price}
          qtd= {qtd}
          obs= {obs}
        
        
        
        
          />
         
        })}


      </View>
   <Snackbar/>
    </ScrollView>
  );
};
export default List;



const list = [
{
  name:"Yuri Felipe Valentim de Almeida",
  date:"12 de novembro de 2021",
  hour:"12:25",
  n_Pedido: 328753,
  price: 1680,
  qtd: 56,
  obs: "Arrumar alguns galões de 5 litros",
},
{
  name:"Yuri",
  date:"12 de novembro de 2021",
  hour:"12:25",
  n_Pedido: 32314,
  price: 1680,
  qtd: 56,
  obs: "Arrumar alguns galões de 5 litros",
},
{
  name:"Yuri Felipe Valentim de Almeida",
  date:"12 de novembro de 2021",
  hour:"12:25",
  n_Pedido: 321413,
  price: 1680,
  qtd: 56,
  obs: "Arrumar alguns galões de 5 litros",
},
{
  name:"Yuri Felipe Valentim de Almeida",
  date:"12 de novembro de 2021",
  hour:"12:25",
  n_Pedido: 44323,
  price: 1680,
  qtd: 56,
  obs: "Arrumar alguns galões de 5 litros",
},
{
  name:"Yuri Felipe Valentim de Almeida",
  date:"12 de novembro de 2021",
  hour:"12:25",
  n_Pedido: 3203,
  price: 1680,
  qtd: 56,
  obs: "Arrumar alguns galões de 5 litros",
},
{
  name:"Yuri Felipe Valentim de Almeida",
  date:"12 de novembro de 2021",
  hour:"12:25",
  n_Pedido: 32143,
  price: 1680,
  qtd: 56,
  obs: "Arrumar alguns galões de 5 litros",
},
{
  name:"Yuri Felipe Valentim de Almeida",
  date:"12 de novembro de 2021",
  hour:"12:25",
  n_Pedido: 3423,
  price: 1680,
  qtd: 56,
  obs: "Arrumar alguns galões de 5 litros",
},
{
  name:"Yuri Felipe Valentim de Almeida",
  date:"12 de novembro de 2021",
  hour:"12:25",
  n_Pedido: 32,
  price: 1680,
  qtd: 56,
  obs: "Arrumar alguns galões de 5 litros",
},
{
  name:"Yuri Felipe Valentim de Almeida",
  date:"12 de novembro de 2021",
  hour:"12:25",
  n_Pedido: 23,
  price: 1680,
  qtd: 56,
  obs: "Arrumar alguns galões de 5 litros",
}
]


