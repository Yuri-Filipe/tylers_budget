import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo, Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Button from '../components/button_add/Index'

const Tab = createMaterialBottomTabNavigator();

import Home from "../pages/home/Index";
import About from "../pages/about/Index";
import List from "../pages/list/Index";
import Add from "../pages/add/Index";
import History from "../pages/history/Index";

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{
          backgroundColor: "#072120",
          paddingBottom: 10,
          paddingTop: 10,
          
         
        }}
        screenOptions={{}}
        
        activeColor="#87898A" //53
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
        <Tab.Screen name="ADD" component={Add} 
       
         options={{
      
  
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="plus" focused={focused} color={color} size={25}  />
          ),
        }} />
        <Tab.Screen name="HISTORY" component={History} 
         options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="history" focused={focused} color={color} size={25}  />
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
