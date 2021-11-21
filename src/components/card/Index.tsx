import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Menu from '../../components/menu/Index'
interface Types {
  n_Pedido: number;
  name: string;
  hour: string;
  date: string;
  price: number;
  qtd: number;
  obs: string;
}

const Index: React.FC<Types> = ({
  n_Pedido,
  name,
  hour,
  date,
  price,
  qtd,
  obs,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topDate}>
        <Text style={{
              fontSize:16,
              marginLeft:80,
              color:"#F4FAF7"
            }}>{date}</Text>
            <Menu/>
      </View>

      <View style={styles.content}>
        <View style={styles.topLine}>
          <Text
            style={{
              marginLeft: 10,
              color: "#E8F4EE"
            }}
          >
            {`# ${n_Pedido}`}
          </Text>
          <Text
            style={{
              marginLeft: 270,
              color: "#E8F4EE"
            }}
          >
            {hour}
          </Text>
        </View>
        <View style={styles.cardPeople}>
        <AntDesign name="user" size={30} color="#05181C" style = {{
          marginLeft:6,
        }} />

          <Text
            style={{
              marginLeft: 10,
              textTransform:"uppercase",
              fontSize:14,
              color: "#0A1D20"
            }}
          >
            {name}
          </Text>
        </View>
        <View style={styles.descrition}>
          <View style={styles.lines} />
          <Text style={styles.textDescription}>
            {qtd > 1 ? `${qtd} liters` : `${qtd} liter`}
          </Text>
          <Text style={styles.textDescription}>{`R$ ${price.toFixed(2)}`}</Text>
          <View style={{...styles.lines,marginTop:4}} />
          <Text
            style={{ ...styles.textDescription, marginTop: 10, marginLeft: 10 }}
          >
            {`OBS: ${obs}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Index;

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: 390,
    height: 242,
    marginTop:40,
    borderRadius: 20,
   
  },
  text: {},
  cardPeople: {
    backgroundColor: "#62696B",
    borderRadius:10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: "91%",
    marginTop:16,
    marginLeft:10,
    
  },
  topDate: {
    backgroundColor: "#44A773",
    display: "flex",
    flexDirection:"row",
    height: 35,
    width: "99%",
    marginTop: 0,
    alignItems: "center",

    borderRadius: 5,
  },
  topLine: {
    marginTop:10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  content: {
    backgroundColor: "#87898A",
    width: "100%",
    height: 200,
    display: "flex",
    borderRadius: 5,
    marginTop: 10,
  },
  descrition: {
    height: 150,
    marginTop:16,

  },
  lines: {
    width: "90%",
    backgroundColor: "#4F595B",
    height: 1,
    borderRadius: 1,
    marginLeft: 10,
  },

  textDescription: {
    color: "#05171B",
    marginLeft: 10,
    marginTop: 3,
  },
});
