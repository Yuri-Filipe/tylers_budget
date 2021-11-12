import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo, Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Button from '../components/buttonAdd/Index'

const Tab = createMaterialBottomTabNavigator();

import Home from "../pages/home/Index";
import About from "../pages/about/Index";
import List from "../pages/list/Index";

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{
          backgroundColor: "#05181C",
          paddingBottom: 10,
          paddingTop: 10,
         
        }}
        screenOptions={{}}
        activeColor="#00c55c" //53
      >
        <Tab.Screen
          name="HOME"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Entypo name="home" focused={focused} color={color} size={25}  />
            ),
          }}
        />
        <Tab.Screen name="LISTS" component={List} 
         options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="list" focused={focused} color={color} size={25}  />
          ),
        }} />
        <Tab.Screen name="ADD" component={List} 
       
         options={{
      
  
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="plus" focused={focused} color={color} size={25}  />
          ),
        }} />
        <Tab.Screen name="RECYCLE" component={List} 
         options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="recycle" focused={focused} color={color} size={25}  />
          ),
        }} />
        <Tab.Screen name="About" component={About} 
         options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="information-circle" focused={focused} color={color} size={25}  />
          ),  
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

const options = {};
