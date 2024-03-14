import React, { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  Image,

  
} from 'react-native';

import { colors } from '../../../../components/Colors';
import { useNavigation } from '@react-navigation/native';
import Switcher from '../../components/Switcher';


const DetailsStatsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [activeSection, setActiveSection] = useState('Play by play');
  const { roundData } = route.params;
  // const { teams } = roundData;
  // const team1 = teams[0];
  // const team2 = teams[1];
  

  return (
    <View style={styles.container}>
      
       <Switcher
          sections={['Play by play', 'Team List', 'Team Stats', 'Player Stats']}
          activeSection={activeSection}
          onSectionChange={(section) => {
            setActiveSection(section);
    
          switch (section) {
            case 'Team List':
              navigation.navigate('Team List',{roundData});
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
 

  
})

   
export default DetailsStatsScreen ;
