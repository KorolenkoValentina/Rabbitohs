import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Image,
  View, 
  Text,
} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen  from '../screens/home/screens/HomeScreen';
import MomentsScreen from '../screens/home/screens/MomentsScreen';
import DrawLadderScreen from '../screens/home/screens/DrawLadderScreen';
import TeamScreen from '../screens/home/screens/TeamScreen';
import AccountScreen from '../screens/home/screens/AccountScreen';

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();


const TabBarIcon = (prop) => {

 
}

const TabBarIconMoments =(prop)=>{
  
 
  
}

const TabBarIconDrawLadder =(prop)=>{

  
}
const TabBarIconTeam =(prop)=>{

  
}
const TabBarIconAccount =(prop)=>{

  
}



const MyTabs =()=> {
  
  return (
   
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      
    }}>
      <Tab.Screen 
      options={{
        tabBarIcon:TabBarIcon
      }}
      name="News" component={HomeScreen} />
      <Tab.Screen
      options={{
        tabBarIcon:TabBarIconMoments ,
      }}
       name="Moments" component={MomentsScreen}/>
      <Tab.Screen
      options={{
        
        tabBarIcon:TabBarIconDrawLadder,
      }}
       name="Draw & Ladder" component={DrawLadderScreen} />

      <Tab.Screen
      options={{
        
        tabBarIcon:TabBarIconTeam,
      }}
       name="Team" component={TeamScreen} />


      <Tab.Screen
      options={{
        
        tabBarIcon:TabBarIconAccount,
      }}
       name="Account" component={AccountScreen} />



    </Tab.Navigator>
  );
}



const  MyStack=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="New" component={MyTabs} />
      <Stack.Screen name="Moment" component={MomentsScreen} />
      <Stack.Screen name="Draw & Ladder" component={DrawLadderScreen} />
      <Stack.Screen name="Teams" component={TeamScreen} />
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







