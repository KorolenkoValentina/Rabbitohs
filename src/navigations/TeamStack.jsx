import React from 'react';
import 'react-native-gesture-handler';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeamScreen from '../screens/home/screens/team/TeamScreen';
import DetailsPlayerscreen from '../screens/home/screens/team/DetailsPlayerScreen';
import PlayerInfoStatsScreen from '../screens/home/screens/team/PlayerInfoStats';
import {colors} from '../components/Colors'
import { ArrowLeftIcon } from '../components/icons/ArrowIcons';
import { useNavigation } from '@react-navigation/native';




const TeamStack =()=>{
  const navigation = useNavigation();
  const TeamStack = createNativeStackNavigator();

  const LogoIcon = () => (
      
    <Image
    source={require('../screens/home/images/logo.png')}
    style={{ width: 54, height: 54 }}
    />
      
  );


  
  return(
    <TeamStack.Navigator
      screenOptions={{
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: () => (<LogoIcon />),}}>

      <TeamStack.Screen
      name="Teams" component={TeamScreen} 
      />
        
        
      <TeamStack.Screen 
      name="Details Player" component={DetailsPlayerscreen} 
      options={({ route }) => ({
        headerStyle: {
          backgroundColor: colors.green, 
        },
        headerBackVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.pop()}>
            <ArrowLeftIcon color={colors.white}/>
          </TouchableOpacity>
        ),
      
        headerTitle: () => (
          <View style={styles.wrap}>
            <Text style={styles.title}>{route.params.item.fullName}</Text>
            <Text style={styles.subtitle}>{route.params.item.type}</Text>
          </View>
        ),
      })}/>

      <TeamStack.Screen 
      name="VIEW player info & Stats" component={PlayerInfoStatsScreen} 
      options={({ route }) => ({
        headerBackVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.pop()}>
            <ArrowLeftIcon color={colors.black}/>
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <View style={styles.wrap}>
            <Text style={[styles.title, { color: 'black' }]}>{route.params.item.fullName}</Text>
            <Text style={[styles.subtitle, { color: 'black' }]}>{route.params.item.type}</Text>
          </View>
        ),
      })}/>
       
    </TeamStack.Navigator>
  )
}



const styles = StyleSheet.create({
  wrap:{
    alignItems:'center'
  },
  title:{
    fontSize:16,
    color:colors.white,
    marginBottom:5
  },
  subtitle:{

  fontSize:11,
    color:colors.white
  },

})
export default TeamStack