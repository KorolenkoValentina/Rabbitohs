import React from 'react';
import 'react-native-gesture-handler';
import {
  Image,
  View,
} from 'react-native';


// import { useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/screens/HomeScreen';
import ArticleScreen from '../screens/home/screens/ArticleScreen'




const HomeStack =()=>{
    // const navigation = useNavigation();
    const HomeStack = createNativeStackNavigator();

    const LogoIcon = () => (
      
        <Image
          source={require('../screens/home/images/logo.png')}
          style={{ width: 54, height: 54 }}
        />
      
    );


    const BellIcon = () => (
        <Image
          source={require('../navigations/image/bell.png')}
          style={{ width: 24, height: 24 }}
        />
    );


  
    return(
      <HomeStack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: () => (<LogoIcon />),
          headerRight: ()=>(<BellIcon/>),
  
        }}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Article" component={ArticleScreen} />
       
      </HomeStack.Navigator>
    )
}
export default HomeStack