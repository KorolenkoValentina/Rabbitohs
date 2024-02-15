
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image, 
  ScrollView,
  TouchableOpacity
  
} from 'react-native';

import { colors } from '../../../components/Colors';



const Articlerscreen = ()=> {
   

  const renderItem  = ()=>{

    return (
        
      <View style={styles.wrap}>
        <ImageBackground source={require('../images/videoArticle/image-3.png')}  style={styles.background}>
              <Text style={styles.title}>Rabbitohs rue missed opportunities in last-ditch</Text>
              <View style={styles.wrapConent}>
                <Text style={styles.subtitle}>Sponsored by:</Text>
                <Image source={require('../images/videoArticle/logo.png')} style={styles.sponsor}/>
              </View>
        </ImageBackground>
        <View style={styles.wrapItem}>
          <Text style={styles.subtitleItem}>South Sydney Rabbitohs</Text>
          <Text style={styles.titleItem}>The Rabbitohs have fallen short in the dying stages in the grand final rematch against Penrith, falling 26-22 at Accor Stadium.</Text>
          <Text style={styles.textItem}>Leading by two points heading into the final five minutes, a late penalty and try with less than two to go effectively ended South Sydney’s top-four hopes.</Text>
          <Text style={styles.textItem}>But it was the half chances throughout the night that will most sting the Rabbitohs, with a number of chances that went begging, inviting the defending premiers into the game and ultimately allowing them to finish over the top.</Text>
          <Image source={require('../images/videoArticle/image-4.png')} style={styles.image}/>
          <Text style={styles.imageTitle}>Match Highlights: Rabbitohs v Panthers</Text>
          <Text style={styles.textItem}>The match was riddled with scoring opportunities that went astray, failing to build a sizeable lead against a side they needed to lift another gear for.</Text>
          <Text style={styles.textItem}>The Rabbitohs have made a habit of scoring first in recent weeks, but the side found themselves behind early on after a bit of déjà vu from last year’s grand final, with Stephen Crichton swooping on a loose pass to run 50 metres and score.</Text>
          <Image source={require('../images/videoArticle/image-4.png')} style={styles.image}/>
          <Text style={styles.imageTitle}>Match Highlights: Rabbitohs v Panthers</Text>
          <Text style={styles.textItem}>Just as the Panthers looked to be slipping away, a big shot on Crichton forced a mistake and South Sydney hit back with a textbook backline movement, with multiple the ball going through multiple sets of hands and finished off with a Campbell Graham.</Text>
          <View style={styles.wrapQuote}>
            <Image source={require('../images/videoArticle/icon-quotation.png')} style={{ margin: 10 }}/>
            <Text style={styles.textQuote}>The outpouring of emotion and the heartfelt tributes for John over the past few days have been amazing for everyone at the Club       and for John’s family.</Text>
            <Text style={styles.titleQuote}>Blake Solly, Rabbitohs CEO</Text>
            <View style={styles.separator}></View>
            
          </View>
             
          <Text style={styles.textItem}>Just as the Panthers looked to be slipping away, a big shot on Crichton forced a mistake and South Sydney hit back with a textbook backline movement, with multiple the ball going through multiple sets of hands and finished off with a Campbell Graham.</Text>
        </View>
          
             
      </View>
    )
  }



  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>{renderItem()}</ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
        
  },
  background: {
    justifyContent:'flex-end',
    width: '100%',
    height:360,
    alignItems:'center',

 },

  wrapConent:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginLeft:"40%"
  },

  title:{
    
    fontSize:20,
    color:colors.white,
  },
  subtitle:{
    fontSize:11,
    color:colors.white
  },

  wrapItem:{
    marginHorizontal:25,
   

  },
  subtitleItem:{
    fontSize:11,
    color:colors.black,
    marginVertical:16
  },
  titleItem:{
    fontSize:14,
    color:colors.black
  },
  image:{
    marginTop:16
  },
  imageTitle:{
    fontSize:11,
    color:colors.extraDarkGrey,
    marginTop:5
  },
  textItem:{
    fontSize:14,
    color:colors.extraDarkGrey,
    marginTop:16
  },
  textQuote:{
    fontSize:14,
    color:colors.black,
    textAlign:'center'
  },
  titleQuote:{
    fontSize:14,
    color:colors.black,
    marginVertical:16,
    textAlign:'center'
  },
  separator: {
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 1,
    marginBottom: 8,
  },


})
export default Articlerscreen