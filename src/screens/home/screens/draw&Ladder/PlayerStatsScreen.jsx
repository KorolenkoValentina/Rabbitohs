import React, { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image, 
  ScrollView
   
} from 'react-native';
import Switcher from '../../components/Switcher';
import { colors } from '../../../../components/Colors';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const PayerStatsScreen = ({ route }) => {
  const [activeSection, setActiveSection] = useState('Player Stats')

  const navigation = useNavigation();
  const { roundData } = route.params;
  
  const { teams } = roundData || { teams: [] };
  const team1 = teams[0];
  const team2 = teams[1];
  


  // Функція для знаходження гравця з найбільшим показником певного параметра
  const findPlayerWithMaxStat = (players, stat) => {
    let maxPlayer = null;
    let maxValue = 0;

    players.forEach(player => {
    if (player[stat] > maxValue) {
      maxPlayer = player;
      maxValue = player[stat];
    }
    });

    return maxPlayer;
  };


  // Обчислення та оновлення даних при завантаженні компонента
  
  const maxTacklesBacksTeam1 = findPlayerWithMaxStat(team1.players?.backs || [], 'tackles');
  const maxTacklesForwardsTeam1 = findPlayerWithMaxStat(team1.players?.forwards || [], 'tackles');
  const maxTacklesTeam1 = maxTacklesBacksTeam1?.tackles > maxTacklesForwardsTeam1?.tackles ? maxTacklesBacksTeam1 : maxTacklesForwardsTeam1;

  const maxTacklesBacksTeam2 = findPlayerWithMaxStat(team2.players?.backs || [], 'tackles');
  const maxTacklesForwardsTeam2 = findPlayerWithMaxStat(team2.players?.forwards || [], 'tackles');
  const maxTacklesTeam2 = maxTacklesBacksTeam2?.tackles > maxTacklesForwardsTeam2?.tackles ? maxTacklesBacksTeam2 : maxTacklesForwardsTeam2;


  const maxRunMetresBacksTeam1 = findPlayerWithMaxStat(team1.players?.backs || [], 'runMetres');
  const maxRunMetresForwardsTeam1 = findPlayerWithMaxStat(team1.players?.forwards || [], 'runMetres');
  const maxRunMetresTeam1 = maxRunMetresBacksTeam1?.runMetres > maxRunMetresForwardsTeam1?.runMetres ? maxRunMetresBacksTeam1 : maxRunMetresForwardsTeam1;

  const maxRunMetresBacksTeam2 = findPlayerWithMaxStat(team2.players?.backs || [], 'runMetres');
  const maxRunMetresForwardsTeam2 = findPlayerWithMaxStat(team2.players?.forwards || [], 'runMetres');
  const maxRunMetresTeam2 = maxRunMetresBacksTeam2?.runMetres > maxRunMetresForwardsTeam2?.runMetres ? maxRunMetresBacksTeam2 : maxRunMetresForwardsTeam2;
  
  

  const maxLineBreaksBacksTeam1 = findPlayerWithMaxStat(team1.players?.backs || [], 'lineBreaks');
  const maxLineBreaksForwardsTeam1 = findPlayerWithMaxStat(team1.players?.forwards || [], 'lineBreaks');
  const maxLineBreaksTeam1 = maxLineBreaksBacksTeam1?.runMetres > maxLineBreaksForwardsTeam1?.runMetres ? maxLineBreaksBacksTeam1 : maxLineBreaksForwardsTeam1;

  const maxLineBreaksBacksTeam2 = findPlayerWithMaxStat(team2.players?.backs || [], 'lineBreaks');
  const maxLineBreaksForwardsTeam2 = findPlayerWithMaxStat(team2.players?.forwards || [], 'lineBreaks');
  const maxLineBreaksTeam2 = maxLineBreaksBacksTeam2?.runMetres > maxLineBreaksForwardsTeam2?.runMetres ? maxLineBreaksBacksTeam2 : maxLineBreaksForwardsTeam2;


  const maxFantasyPointsBacksTeam1 = findPlayerWithMaxStat(team1.players?.backs || [], 'fantasyPoints');
  const maxFantasyPointsForwardsTeam1 = findPlayerWithMaxStat(team1.players?.forwards || [], 'fantasyPoints');
  const maxFantasyPointsTeam1 = maxFantasyPointsBacksTeam1?.runMetres > maxFantasyPointsForwardsTeam1?.runMetres ? maxFantasyPointsBacksTeam1 : maxFantasyPointsForwardsTeam1;

  const maxFantasyPointsBacksTeam2 = findPlayerWithMaxStat(team2.players?.backs || [], 'fantasyPoints');
  const maxFantasyPointsForwardsTeam2 = findPlayerWithMaxStat(team2.players?.forwards || [], 'fantasyPoints');
  const maxFantasyPointsTeam2 = maxFantasyPointsBacksTeam2?.runMetres > maxFantasyPointsForwardsTeam2?.runMetres ? maxFantasyPointsBacksTeam2 : maxFantasyPointsForwardsTeam2;
    
  // Порівнюємо значення для backs та forwards
    // const maxTackles = maxTacklesBacks?.tackles > maxTacklesForwards?.tackles ? maxTacklesBacks : maxTacklesForwards;
    // const maxRunMetres = maxRunMetresBacks?.runMetres > maxRunMetresForwards?.runMetres ? maxRunMetresBacks : maxRunMetresForwards;
    // const maxLineBreaks = maxLineBreaksBacks?.lineBreaks > maxLineBreaksForwards?.lineBreaks ? maxLineBreaksBacks : maxLineBreaksForwards;
    // const maxFantasyPoints = maxFantasyPointsBacks?.fantasyPoints > maxFantasyPointsForwards?.fantasyPoints ? maxFantasyPointsBacks : maxFantasyPointsForwards;
  
  const PlayerItem = () => {
    return (
      <View>
        <Text style={{fontSize:20,marginLeft:25,marginBottom:25}}>Top Performers</Text>
        <Text style={styles.title}>MOST TACKLES</Text>
        <View style={styles.wrapItem}>
        
          <View style={[styles.itemfLeft,{backgroundColor:team1.color }]}>
            <Image source={maxTacklesTeam1.imageTeam} style={styles.player1}/>
            <View style={styles.textContent}>
              <Text style={styles.titleItem}>{ maxTacklesTeam1.fullName}</Text>
              <Text style={styles.subtitle}>{maxTacklesTeam1.tackles}</Text>
            </View> 
           </View>
          <View style={[styles.itemfRight,{backgroundColor:team2.color }]}> 
            <View style={styles.textContent}>
              <Text style={styles.titleItem}>{ maxTacklesTeam2.fullName}</Text>
              <Text style={styles.subtitle}>{maxTacklesTeam2.tackles}</Text>
            </View>
            <Image source={maxTacklesTeam2.imageTeam} style={styles.player2}/>
          </View>
          
        </View>
        <Text style={styles.title}>MOST RUN METRES</Text>
        <View style={styles.wrapItem}>
      
          <View style={[styles.itemfLeft,{backgroundColor:team1.color }]}> 
          <Image source={maxRunMetresTeam1.imageTeam} style={styles.player1}/>
            <View style={styles.textContent}>
              <Text style={styles.titleItem}>{ maxRunMetresTeam1.fullName}</Text>
              <Text style={styles.subtitle}>{maxRunMetresTeam1.fantasyPoints}</Text>
            </View>
          </View>
          <View style={[styles.itemfRight,{backgroundColor:team2.color }]}> 
            <View style={styles.textContent}>
              <Text style={styles.titleItem}>{ maxRunMetresTeam2.fullName}</Text>
              <Text style={styles.subtitle}>{maxRunMetresTeam2.fantasyPoints}</Text>
            </View>
            <Image source={maxRunMetresTeam2.imageTeam} style={styles.player2}/>
          </View>
        </View>
        <Text style={styles.title}>MOST LINE BREAKS</Text>
        <View style={styles.wrapItem}>
      
          <View style={[styles.itemfLeft,{backgroundColor:team1.color }]}> 
          <Image source={maxLineBreaksTeam1.imageTeam} style={styles.player1}/>
            <View style={styles.textContent}>
              <Text style={styles.titleItem}>{ maxLineBreaksTeam1.fullName}</Text>
              <Text style={styles.subtitle}>{maxLineBreaksTeam1.lineBreaks}</Text>
            </View>
          </View>
          <View style={[styles.itemfRight,{backgroundColor:team2.color }]}> 
            <View style={styles.textContent}>
              <Text style={styles.titleItem}>{ maxLineBreaksTeam2.fullName}</Text>
              <Text style={styles.subtitle}>{maxLineBreaksTeam2.lineBreaks}</Text>
            </View>
            <Image source={maxLineBreaksTeam2.imageTeam} style={styles.player2}/>
          </View>
        </View>
        <Text style={styles.title}>MOST FANTASY POINTS</Text>
        <View style={styles.wrapItem}>
      
          <View style={[styles.itemfLeft,{backgroundColor:team1.color }]}> 
          <Image source={maxFantasyPointsTeam1.imageTeam} style={styles.player1}/>
            <View style={styles.textContent}>
              <Text style={styles.titleItem}>{ maxFantasyPointsTeam1.fullName}</Text>
              <Text style={styles.subtitle}>{maxFantasyPointsTeam1.fantasyPoints}</Text>
            </View>
          </View>
          <View style={[styles.itemfRight,{backgroundColor:team2.color }]}> 
            <View style={styles.textContent}>
              <Text style={styles.titleItem}>{maxFantasyPointsTeam2.fullName}</Text>
              <Text style={styles.subtitle}>{maxFantasyPointsTeam2.fantasyPoints}</Text>
            </View>
            <Image source={maxFantasyPointsTeam2.imageTeam} style={styles.player2}/>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Switcher
          sections={['Play by play', 'Team List', 'Team Stats', 'Player Stats']}
          activeSection={activeSection}
          onSectionChange={(section) => {
            setActiveSection(section);
    
          switch (section) {
            case 'Team List':
              navigation.navigate('Team List',{roundData});
            break;
            case 'Team Stats':
              navigation.navigate('Team Stats', {roundData});
            break;
            case 'Play by play':
              navigation.navigate('Play by play',{roundData});
            break;
      
            default:
        
           break;
          }
        }}
        />
      
        <PlayerItem/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey2,
  },

  wrapItem: {
    flexDirection:'row',
    alignItems: 'center', 
    borderRadius:12,
    marginBottom:20,
    marginHorizontal:25,
       
  },
  itemfLeft:{
    flexDirection:'row', 
    borderTopStartRadius:12,
    borderBottomStartRadius:12,
    height:100,
    // background: 'linear-gradient(to bottom right, #FF0000 50%, #0000FF 50%)',


  },
  itemfRight:{
    flexDirection:'row',  
    borderTopRightRadius:12,
    borderBottomRightRadius:12,
    paddingLeft:30,
    height:100,
    width: '50%',

  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color:colors.black,
    textAlign:'center',
    marginBottom:20
    
  },
  textContent:{ 
    width:68,
    marginTop:20,
    
  },
  titleItem:{
    fontSize: 11,
    color:colors.white,

  },
  player1: {
    bottom: 8,
    resizeMode:"contain" ,
    borderBottomLeftRadius:16
    
  },
  player2: {
   
    right: 32,
    bottom: 8,
    resizeMode:"contain" ,
    borderBottomRightRadius:16
    
  },
  subtitle:{
    fontSize: 22,
    color:colors.white,
  },

  
});

export default PayerStatsScreen;
