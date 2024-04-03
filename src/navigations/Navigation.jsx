import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';

import {colors} from '../components/Colors'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import MomentsStack from './MomentsStack';
import ProfileScreen from '../screens/home/screens/account/ProfileScreen';
import DrawLadderStack from './DrawLadderStack';
import TeamStack from './TeamStack'
import AccountStack from './AccountStack';
import SignUpScreen from '../screens/home/screens/registration/CreateAccountScreen';
import LogInScreen from '../screens/home/screens/registration/LogInScreens';
import ForrgotPasswordScreen from '../screens/home/screens/registration/ForrgotPasswordScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect} from '@react-navigation/native';


import {NewsIcon, MomentsIcon, DrawLadderIcon, TeamIcon, AccountIcon } from '../components/icons/NavigationScreenIcons'


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
       name="Moments" component={MomentsStack}/>
      <Tab.Screen
      options={{
        
        tabBarIcon:DrawLadderIcon,
      }}
       name="Draw & Ladder" component={DrawLadderStack} />

      <Tab.Screen
      options={{
        
        tabBarIcon:TeamIcon,
      }}
       name="Team" component={TeamStack} />


      <Tab.Screen
      options={{
        
        tabBarIcon:AccountIcon,
      }}
       name="Account" component={AccountStack} />



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
      <Stack.Screen name="Moment" component={MomentsStack} />
      <Stack.Screen name="Draw & Ladders" component={DrawLadderStack} />
      <Stack.Screen name="Teams" component={TeamStack} />
      <Stack.Screen name="Accounts" component={AccountStack} />
    </Stack.Navigator>
  
  );
};

export default function Navigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     const checkLoginStatus = async () => {
  //       const value = await AsyncStorage.getItem('isLoggedIn');
  //       console.log('Before Login - isLoggedIn value:', value);
  //       setIsLoggedIn(value === 'true');
  //     };

  //     checkLoginStatus();
  //   }, [])
  // );
 
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const userToken = await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(!!userToken); 
  };


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'MainTabs' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Forgot password" component={ForrgotPasswordScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="MainTabs" component={MyStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}







