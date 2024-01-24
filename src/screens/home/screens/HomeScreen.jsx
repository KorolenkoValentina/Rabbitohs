import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';


const HomeScreen = () => {
 
  return (
    <View style={styles.container}>
          <Text style={styles.title}> Hello</Text>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop:StatusBar.currentHeight || 0,
  }, 

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },

  
})

   
export default HomeScreen ;