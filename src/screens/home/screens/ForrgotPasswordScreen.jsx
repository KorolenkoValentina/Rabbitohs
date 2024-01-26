import React,{useState} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {colors} from '../../../components/Colors';


export default function  LogInScreen (){
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

   
    
    const handleSend = () => {
        
        console.log('Email:', email);

    };
    
    const navigateToLogIn = () => {
        navigation.navigate('Login');
    };

    // const isEmailValid = (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    //   };

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.wrap}>
                <Image source={require('../images/logo.png')} style={styles.logo} />
                <Text style={styles.titleHeader}> Forgot password </Text>
                <Text style={styles.subtitle}>Enter your account email and we will send you a recovery link.</Text>

                <View style={styles.emailInput}>
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                    />
                </View>

                
                <TouchableOpacity style={styles.wrapButton} onPress={handleSend} >
              
                    <Text style={styles.titleButton}>SEND </Text> 
                </TouchableOpacity>
            
                <View style={styles.wrapTitle}>
                    <Text style={styles.subtitle}>I remember my password</Text>
                    <TouchableOpacity>
                        <Text style={[styles.title, { textDecorationLine: 'underline' }]} onPress={navigateToLogIn }> Login</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      
    },
    
    logo:{
     width:100,
     height:100
    },

    titleHeader:{
        fontSize:22,
        textAlign:'center',
        marginVertical:24,
        color:colors.black
    },
    subtitle:{
        fontSize: 14,
        color:colors.extraDarkGrey

    },

    input: {
        height: 55,
        borderColor: colors.darkGrey,
        borderWidth: 1,
        marginBottom: 24,
        paddingLeft: 8,
        paddingRight: 16,
        width: 327,
        color:colors.extraDarkGrey
    },
    

    wrapTitle:{
        flexDirection:'row',
    
    },

    wrapButton:{
        backgroundColor: colors.green,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        
    },

    titleButton: {
        fontSize: 12,
        color: colors.white, 
        textAlign:'center'
    },

    title:{
        fontSize:14,
        color:colors.green
    },
    
})