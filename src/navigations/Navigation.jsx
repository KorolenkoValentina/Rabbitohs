import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Image,
  View, 
  Text,
} from 'react-native';
import {colors} from '../components/Colors'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import MomentsScreen from '../screens/home/screens/MomentsScreen';
import DrawLadderScreen from '../screens/home/screens/DrawLadderScreen';
import TeamStack from './TeamStack'
import AccountScreen from '../screens/home/screens/AccountScreen';

import NewsIcon from "../components/icons/NewsIcon";
import MomentsIcon from "../components/icons/MomentsIcon";
import DrawLadderIcon from "../components/icons/DrawLadderIcon";
import TeamIcon from "../components/icons/TeamIcon";
import AccountIcon from "../components/icons/AccountIcon";

const Stack = createNativeStackNavigator();



const Tab = createBottomTabNavigator();


const MyTabs =()=> {
  
  return (
   
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:colors.green,
      
    }}>
      <Tab.Screen 
      options={{
        tabBarIcon:NewsIcon,
      }}
      name="News" component={HomeStack} />
      <Tab.Screen
      options={{
        tabBarIcon:MomentsIcon ,
      }}
       name="Moments" component={MomentsScreen}/>
      <Tab.Screen
      options={{
        
        tabBarIcon:DrawLadderIcon,
      }}
       name="Draw & Ladder" component={DrawLadderScreen} />

      <Tab.Screen
      options={{
        
        tabBarIcon:TeamIcon,
      }}
       name="Team" component={TeamStack} />


      <Tab.Screen
      options={{
        
        tabBarIcon:AccountIcon,
      }}
       name="Account" component={AccountScreen} />



    </Tab.Navigator>
  );
}



const  MyStack=()=> {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="New" component={MyTabs} />
      <Stack.Screen name="Moment" component={MomentsScreen} />
      <Stack.Screen name="Draw & Ladder" component={DrawLadderScreen} />
      <Stack.Screen name="Teams" component={TeamStack} />
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  
  );
};

export default function Navigator() {

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}







