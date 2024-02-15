import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image, 
  TouchableOpacity
  
} from 'react-native';

import { colors } from '../../../components/Colors';




const PlayerInfoStatsScreen = ({ route})=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState('2024');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    

    const selectYear = (year) => {
        setSelectedYear(year);
        setIsMenuOpen(false);
    };
   
  const { item } = route.params;

  const renderMenu = () => {
    if (!isMenuOpen) return null;

    return (
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => selectYear('2023')}>
          <Text style={styles.menuItem}>2023</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectYear('2024')}>
          <Text style={styles.menuItem}>2024</Text>
        </TouchableOpacity>
      </View>
    );
  };


    const renderItem  = ()=>{
        const seasonStats = item.playerInfoStats.seasonStats[selectedYear];
        if (!seasonStats) return null;

      return (
        
        <View style={styles.item}>
            <Text style={styles.title}>Career stats</Text>
                 
            <View style={[styles.wrapItem, styles.sectionSecond]}>
                <View style={styles.info}>
                    <Text style={[styles.titleInfo, {color:colors.black}]}>APPEARANCES</Text> 
                    <Text style={styles.textInfo}>{item.playerInfoStats.careerStats.appearances}</Text> 
                </View>
                <Image source={require('../images/teamScreen/line.png')} />
                <View style={styles.info}>
                    <Text style={[styles.titleInfo, {color:colors.black}]}>TRIES</Text> 
                    <Text style={styles.textInfo}>{item.playerInfoStats.careerStats.tries}</Text> 
                </View>            
            </View>

            <Text style={styles.title}>Season stats ({selectedYear})</Text>
            <TouchableOpacity onPress={toggleMenu}>
                <Image source={require('../images/profile/arrowDown.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
            {renderMenu()}
            <View style={styles.wrapItem}>
                <View style={styles.seasonInfo}>
                    <View style={styles.wrapTitle}>
                        <Image source={require('../images/profile/icons.png')} style={styles.icon} />
                        <Text style={styles.titleInfo}>APPEARANCES</Text> 
                    </View>
                    <Text style={styles.textInfo}>{seasonStats.appearances}</Text> 
                </View> 
                           
            </View>

            <View style={styles.wrapItem}>
                <View style={ styles.sectionFirst}>
                    <View style={styles.wrapTitle}>
                        <Image source={require('../images/profile/rugbyIcons.png')} style={styles.icon} />
                        <Text style={styles.titleInfo}>SCORING</Text>
                        
                    </View>
                    <Image source={require('../images/teamScreen/linehorisontal.png')} /> 
                </View>
                <View style={ styles.sectionSecond}>
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Tries</Text> 
                        <Text style={styles.textInfo}>{seasonStats.scoring.tries}</Text> 
                    </View> 
                    <Image source={require('../images/teamScreen/line.png')} />
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Goals</Text> 
                        <Text style={styles.textInfo}>{seasonStats.scoring.goals}</Text> 
                    </View>

                </View>
                          
            </View>
            <View style={styles.wrapItem}>
                <View style={ styles.sectionFirst}>
                    <View style={styles.wrapTitle}>
                        <Image source={require('../images/profile/kickings.png')} style={styles.icon} />
                        <Text style={styles.titleInfo}>KICKING</Text>
                        
                    </View>
                    <Image source={require('../images/teamScreen/linehorisontal.png')} /> 
                </View>
                <View style={ styles.sectionSecond}>
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Forced drop outs</Text> 
                        <Text style={styles.textInfo}>{seasonStats.kicking.forcedDropOuts}</Text> 
                    </View> 
                    <Image source={require('../images/teamScreen/line.png')} />
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Goal conversion rate</Text> 
                        <Text style={styles.textInfo}>{seasonStats.kicking.goalConversionRate}</Text> 
                    </View>
                    <Image source={require('../images/teamScreen/line.png')} />
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Tries</Text> 
                        <Text style={styles.textInfo}>{seasonStats.kicking.tries}</Text> 
                    </View>

                </View>
                          
            </View>

            <View style={styles.wrapItem}>
                <View style={ styles.sectionFirst}>
                    <View style={styles.wrapTitle}>
                        <Image source={require('../images/profile/attack.png')} style={styles.icon} />
                        <Text style={styles.titleInfo}>ATTACK</Text>
                        
                    </View>
                    <Image source={require('../images/teamScreen/linehorisontal.png')} /> 
                </View>
                <View style={ styles.sectionSecond}>
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Try assists</Text> 
                        <Text style={styles.textInfo}>{seasonStats.attack.tryAssists}</Text> 
                    </View> 
                    <Image source={require('../images/teamScreen/line.png')} />
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Line break assists</Text> 
                        <Text style={styles.textInfo}>{seasonStats.attack.lineBreakAssists}</Text> 
                    </View>

                </View>
                          
            </View>
            <View style={styles.wrapItem}>
                <View style={ styles.sectionFirst}>
                    <View style={styles.wrapTitle}>
                        <Image source={require('../images/profile/passing.png')} style={styles.icon} />
                        <Text style={styles.titleInfo}>PASSING</Text>
                        
                    </View>
                    <Image source={require('../images/teamScreen/linehorisontal.png')} /> 
                </View>
                <View style={ styles.sectionSecond}>
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Offloads</Text> 
                        <Text style={styles.textInfo}>{seasonStats.passing.offloads}</Text> 
                    </View> 
                    <Image source={require('../images/teamScreen/line.png')} />
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Receipts</Text> 
                        <Text style={styles.textInfo}>{seasonStats.passing.receipts}</Text> 
                    </View>

                </View>
                          
            </View>
            <View style={styles.wrapItem}>
                <View style={ styles.sectionFirst}>
                    <View style={styles.wrapTitle}>
                        <Image source={require('../images/profile/defence.png')} style={styles.icon} />
                        <Text style={styles.titleInfo}>DEFENCE</Text>
                        
                    </View>
                    <Image source={require('../images/teamScreen/linehorisontal.png')} /> 
                </View>
                <View style={ styles.sectionSecond}>
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Tackles made</Text> 
                        <Text style={styles.textInfo}>{seasonStats.defence.tacklesMade}</Text> 
                    </View> 
                    <Image source={require('../images/teamScreen/line.png')} />
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Tackle efficiency</Text> 
                        <Text style={styles.textInfo}>{seasonStats.defence.tackleEfficiency}</Text> 
                    </View>

                </View>
                          
            </View>
            <View style={styles.wrapItem}>
                <View style={ styles.sectionFirst}>
                    <View style={styles.wrapTitle}>
                        <Image source={require('../images/profile/runing.png')} style={styles.icon} />
                        <Text style={styles.titleInfo}>RUNNING METRES</Text>
                        
                    </View>
                    <Image source={require('../images/teamScreen/linehorisontal.png')} /> 
                </View>
                <View style={ styles.sectionSecond}>
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Avg.running metres</Text> 
                        <Text style={styles.textInfo}>{seasonStats.runningMetres.avgrunningMetres}</Text> 
                    </View> 
                    <Image source={require('../images/teamScreen/line.png')} />
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Total running metres</Text> 
                        <Text style={styles.textInfo}>{seasonStats.runningMetres.totalrunningMetres}</Text> 
                    </View>

                </View>
                          
            </View>
            <View style={styles.wrapItem}>
                <View style={ styles.sectionFirst}>
                    <View style={styles.wrapTitle}>
                        <Image source={require('../images/profile/fantasy.png')} style={styles.icon} />
                        <Text style={styles.titleInfo}>FANTASY</Text>
                        
                    </View>
                    <Image source={require('../images/teamScreen/linehorisontal.png')} /> 
                </View>
                <View style={ styles.sectionSecond}>
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Total points</Text> 
                        <Text style={styles.textInfo}>{seasonStats.fantasy.totalPoints}</Text> 
                    </View> 
                    <Image source={require('../images/teamScreen/line.png')} />
                    <View style={styles.seasonInfo}>
                        <Text style={styles.subtitleInfo}>Avg. points</Text> 
                        <Text style={styles.textInfo}>{seasonStats.fantasy.avgPoints}</Text> 
                    </View>

                </View>
                          
            </View>
                
                
        </View>
              

        

         
             

        
      )
    }



    return(

      <SafeAreaView style={styles.container}>
        <FlatList
          data={[item]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString() }
        />
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.lightgrey2,
    
      
  },
  item:{
    marginHorizontal:25,
  },
  wrapItem:{
    backgroundColor:colors.white,
    borderRadius:12,
    marginBottom:16
    
   },
   sectionFirst:{
    alignItems:'center',
    marginBottom:16
   },

   sectionSecond:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    
   },


   title:{
    color:colors.black,
    fontSize:22,
    marginVertical:16

   },

   info:{
    alignItems:'center',
    marginTop:16,
    

   },
   titleInfo:{
    color:colors.green,
    fontSize:11,
    
   },
   subtitleInfo:{
    color:colors.black,
    fontSize:11,

   },
   textInfo:{
    color:colors.black,
    fontSize:20,
    marginVertical:16
   },

   seasonInfo:{
    alignItems:'center',

   },

   wrapTitle:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:16,

   },
   icon:{
    marginRight:10
   }




})
export default PlayerInfoStatsScreen