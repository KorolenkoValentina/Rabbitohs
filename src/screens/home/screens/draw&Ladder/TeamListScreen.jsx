import React, { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SectionList,
  ScrollView,
} from 'react-native';

import { colors } from '../../../../components/Colors';
import { useNavigation } from '@react-navigation/native';
import Switcher from '../../components/Switcher';


const PlayerList = ({ data}) => {
 
  return (
       
    <FlatList
    data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.wrapContent}>
          <Image source={item.imageTeam} style={styles.player}/>
          <Text style={styles.titleContent}>{item.fullName}</Text>
          <View style={styles.wrap}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
              <Text style={styles.wrapText}>1</Text>
              <Image source={require('../../images/teamScreen/line2.png')}/>
              <Text style={styles.wrapText}>2</Text>
            </View>
            <Text style={styles.wrapText}>{item.type}</Text>
          </View>
        </View>      
   
      )}
    />
       
  );
};

const PlayerListTwo = ({ data}) => {
  return (
          
    <FlatList
      data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (  
        <View style={styles.wrapContent}>    
          <Text style={styles.titleContent}>{item.fullName}</Text>
          <Image source={item.imageTeam} style={styles.player2}/>   
          
        </View>
      )}
    />
   
    
  );
};


const TeamListScreen = ({ route }) => {
  const navigation = useNavigation();
  const [activeSection, setActiveSection] = useState('Team List');
  const { roundData } = route.params;
  const { teams } = roundData;
  const team1 = teams[0];
  const team2 = teams[1];
  
  const sections = [
    {
      title: "Backs",
      data: team1.players.backs.map((player, index) => ({ left: player, right: team2.players.backs[index] })),
    },
    {
      title: "Forwards",
      data: team1.players.forwards.map((player, index) => ({ left: player, right: team2.players.forwards[index] })),
    },
    

  ];

  const List = () => {

    return (
            <>
            <Text style={styles.title}>Coaches</Text>
            <View style={styles.item}>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <Text style={styles.titleItem}>{team1.coach.fullName}</Text>
                <Text style={styles.wrapText}>{team1.coach.type}</Text>
                <Text style={styles.titleItem}>{team2.coach.fullName}</Text>
              </View>  
            </View>
            <Text style={styles.title}>Match Officials</Text>
            <View style={styles.item}>
              <View>
                <Text style={styles.titleItem}>{roundData.matchOfficials.referee.fullName}</Text>
                <Text style={styles.wrapText}>{roundData.matchOfficials.referee.type}</Text>
              </View>  
            </View>
            <View style={styles.item}>
              <View>
                <Text style={styles.titleItem}>{roundData.matchOfficials.touchJudge.fullName}</Text>
                <Text style={styles.wrapText}>{roundData.matchOfficials.touchJudge.type}</Text>
              </View>  
            </View>
            <View style={styles.item}>
              <View>
                <Text style={styles.titleItem}>{roundData.matchOfficials.seniorReview.fullName}</Text>
                <Text style={styles.wrapText}>{roundData.matchOfficials.seniorReview.type}</Text>
              </View>  
            </View>
            </>
          
    ); 
  };
 

  return (
    <View style={styles.container}>
      <ScrollView>
       <Switcher
          sections={['Play by play', 'Team List', 'Team Stats', 'Player Stats']}
          activeSection={activeSection}
          onSectionChange={(section) => {
            setActiveSection(section);
    
          switch (section) {
            case 'Play by play':
              navigation.navigate('Details Stats',{roundData});
            break;
            // case 'Team Stats':
            //   navigation.navigate('TeamStatsScreen', { mockBacksYears});
            // break;
            // case 'Player Stats':
            //   navigation.navigate('PlayerStatsScreen', { mockBacksYears});
            // break;
      
            default:
        
           break;
          }
        }}
      />
     
       <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${item.left.id}_${index}`}
        renderItem={({ item }) => (   
           <View style={styles.wrapItem}>
             <View style={{ flexDirection: 'row',}}>
              <PlayerList data={[item.left]} />
              <PlayerListTwo data={[item.right]} />
              </View> 
           </View> 
          
        )}       
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
        
      />
      <List/>
      </ScrollView>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey2,

  }, 
  wrapItem: {
    flexDirection:'row',
    alignItems: 'center', 
    borderRadius:12,
    marginBottom:16,
    paddingVertical:10,
    backgroundColor:colors.white,
    marginHorizontal:25,
    height:100
  },
  item:{
    borderRadius:12,
    marginBottom:16,
    padding:15,
    backgroundColor:colors.white,
    marginHorizontal:25,
    

  },
 

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:colors.black,
    marginLeft:28,
    marginBottom:20
    
  },

  titleItem:{
    fontSize: 14,
    color:colors.black,

  },

  wrapContent:{
    flexDirection:'row',
    right: 4,
  },

  titleContent:{
    fontSize: 11,
    color:colors.black,
    width:68,
    right:18,
    marginTop:20

  },

  subtitleContent:{
    fontSize: 14,
    color:colors.extraDarkGrey,
  },


  player: {
    bottom: 5,
    width: 110, 
    height: 110, 
    resizeMode:"contain" ,
    borderBottomLeftRadius:16
    
  },
  player2: {
   
    right: 67,
    bottom: 5,
    width: 110, 
    height: 110, 
    resizeMode:"contain" ,
    borderBottomRightRadius:16
    
  },
  wrap:{
    bottom:-62,
    right: 40,
  },
  wrapText:{
    fontSize: 11,
    color:colors.extraDarkGrey,
  }

  
})

   
export default TeamListScreen ;
