import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  
} from 'react-native';


const MomentsScreen = () => {
 
  return (
    <View style={styles.container}>
          <Text style={styles.title}> Hello</Text>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }, 

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },

  
})

   
export default MomentsScreen ;