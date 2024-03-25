import React from 'react';
import 'react-native-gesture-handler';
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';


// import { useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawLadderScreen from '../screens/home/screens/draw&Ladder/DrawLadderScreen';
import LadderScreen from '../screens/home/screens/draw&Ladder/LadderScreen';
import MatchScreen from '../screens/home/screens/draw&Ladder/MatchScreen';
import ArticleScreen from '../screens/home/screens/ArticleScreen';
import DetailsStatsScreen from '../screens/home/screens/draw&Ladder/DetailsStatsScreen';
import TeamListScreen from '../screens/home/screens/draw&Ladder/TeamListScreen';
import PayerStatsScreen from '../screens/home/screens/draw&Ladder/PlayerStatsScreen';
import TeamStatsScreen from '../screens/home/screens/draw&Ladder/TeamStatsScreen';
import {colors} from '../components/Colors'




const DrawLadderStack =()=>{
    // const navigation = useNavigation();
  const DrawLadderStack = createNativeStackNavigator();

  const LogoIcon = () => (
      
    <Image
    source={require('../screens/home/images/logo.png')}
    style={{ width: 54, height: 54 }}
    />
      
  );

  const ArrowIcon = () => (
      
    <Image
    source={require('./image/back.png')}
    style={{ width: 24, height: 24 }}
    />
      
  );


  
  return(
    <DrawLadderStack.Navigator
      screenOptions={{
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: () => (<LogoIcon />),}}>

      <DrawLadderStack.Screen
      name="DrawLadder" component={DrawLadderScreen} 
      />

      <DrawLadderStack.Screen 
        name="Ladder" component={LadderScreen} 
      />

      <DrawLadderStack.Screen 
        name="Match" component={MatchScreen} 
        options={() => ({
          headerStyle: {
            backgroundColor: colors.green, 
          },
          headerBackImageSource: require('./image/back.png') ,
          headerTitle: () => (
            
          <Text style={styles.title}>Telstra Premiership</Text>
              
          ),
        })}
      />
      <DrawLadderStack.Screen 
        name="Article" component={ArticleScreen} 
        
      /> 

      <DrawLadderStack.Screen 
        name="Details Stats" component={DetailsStatsScreen} 
        options={({ route }) => ({
          headerBackImageSource: require('./image/back.png') ,
          headerTitle: () => (
            <View style={styles.wrapCommands}>
            <Image source={route.params.roundData.teams[0].image} style={styles.image} />            
            {route.params.roundData.teams[0].goals && <Text style={styles.subtitle}>{route.params.roundData.teams[0].goals}</Text>}
            {route.params.timeComponent}
            {route.params.roundData.teams[1].goals && <Text style={styles.subtitle}>{route.params.roundData.teams[1].goals}</Text>}
            <Image source={route.params.roundData.teams[1].image} style={styles.image} />
              
          </View>
          ),
        })}
      /> 

      <DrawLadderStack.Screen 
        name="Team List" component={TeamListScreen} 
        
      />
       <DrawLadderStack.Screen 
        name="Team Stats" component={TeamStatsScreen} 
        
      />
      <DrawLadderStack.Screen 
        name="Player Stats" component={PayerStatsScreen} 
        
      />



    </DrawLadderStack.Navigator>
  )
}





const styles = StyleSheet.create({
  title:{
    fontSize:16,
    color:colors.white,
    marginBottom:5,
    
  },
  wrapCommands:{
    flexDirection:'row',
    alignItems:'center',
    
    
  },
  image:{
    height:40,
    width:40,

  },

  subtitle: {
    color:colors.black,
    fontSize:14,
    marginLeft:10,
    marginRight:10
  },

})
export default DrawLadderStack