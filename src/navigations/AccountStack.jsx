import React from 'react';
import 'react-native-gesture-handler';
import {
  Image,
  
} from 'react-native';


// import { useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/home/screens/account/AccountScreen';
import HelpAndSupportScreen from '../screens/home/screens/account/HelpSupportScreen';
import UpdatePasswordScreen from '../screens/home/screens/account/UpdatePassword';
import ProfileScreen from '../screens/home/screens/account/ProfileScreen';
import GenderSelectionScreen from '../screens/home/screens/account/GenderSelectionScreen';
import {colors} from '../components/Colors'




const AccountStack =()=>{
    // const navigation = useNavigation();
  const AccountStack = createNativeStackNavigator();

  const BellIcon = () => (
    <Image
      source={require('../navigations/image/bell.png')}
      style={{ width: 24, height: 24 }}
    />
  );
 
  return(
    <AccountStack.Navigator
      screenOptions={{
      headerShown: true,
      headerTitleAlign: 'center',
        headerTitleStyle: {
        color: colors.black, 
        },
      headerRight: ()=>(<BellIcon/>),
      }}>

      <AccountStack.Screen
      name="Account" component={AccountScreen} 
      />
        
        
      <AccountStack.Screen 
      name="Profile" component={ProfileScreen} 
      
      />

      {/* <AccountStack.Screen 
      name="Purchases" component={} 
      />
      <AccountStack.Screen 
      name="My Benefits" component={} 
      />
       <AccountStack.Screen 
      name="Registrations" component={} 
      />
       
       <AccountStack.Screen 
      name="Notifications" component={} 
      /> */}
       <AccountStack.Screen 
      name="Update Password" component={UpdatePasswordScreen} 
      />
       <AccountStack.Screen 
      name="Help & Support" component={HelpAndSupportScreen} 
      />

      <AccountStack.Screen 
      name="Choose gender" component={GenderSelectionScreen} 
      
      />
       
       
    </AccountStack.Navigator>
  )
}

export default AccountStack