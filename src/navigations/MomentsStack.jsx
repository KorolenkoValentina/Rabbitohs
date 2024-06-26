import React from 'react';
import 'react-native-gesture-handler';
import {
  Image,
  View,
} from 'react-native';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MomentsScreen from '../screens/home/screens/MomentsScreen';
import { BellIcon } from '../components/icons/NavigationScreenIcons';



const MomentsStack =()=>{
    const MomentsStack = createNativeStackNavigator();


  
    return(
      <MomentsStack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerRight: ()=>(<BellIcon/>),
  
        }}>
        <MomentsStack.Screen name="Moments" component={MomentsScreen} />
        
       
      </MomentsStack.Navigator>
    )
}
export default MomentsStack