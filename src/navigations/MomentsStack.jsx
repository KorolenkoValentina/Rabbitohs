import React from 'react';
import 'react-native-gesture-handler';
import {
  Image,
  View,
} from 'react-native';


// import { useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MomentsScreen from '../screens/home/screens/MomentsScreen';




const MomentsStack =()=>{
    // const navigation = useNavigation();
    const MomentsStack = createNativeStackNavigator();




    const BellIcon = () => (
        <Image
          source={require('../navigations/image/bell.png')}
          style={{ width: 24, height: 24 }}
        />
    );


  
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