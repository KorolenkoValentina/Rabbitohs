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
import {colors} from '../../../../components/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function  LogInScreen (){
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

   
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
       
        await AsyncStorage.setItem('isLoggedIn', 'true');
        
        navigation.replace('MainTabs'); 
      };
    
    const navigateToSignUp = () => {
        navigation.navigate('Sign Up');
    };

    const navigateToPassword = () => {
        navigation.navigate('Forgot password');
    };


    // const isEmailValid = (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    //   };

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.wrap}>
                <Image source={require('../../images/logo.png')} style={styles.logo} />
                <Text style={styles.titleHeader}> Login </Text>

                <View style={styles.emailInput}>
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                    />
                </View>

                <View style={styles.passwordInput}>
                    <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    onChangeText={setPassword}
                    value={password}
                    required
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
                        <Image source={showPassword ? require('../../images/eye.png') : require('../../images/eye.png')}
                            style={styles.eyeIcon}
                        />
                    </TouchableOpacity>
                </View>
                </View>
                <TouchableOpacity onPress={navigateToPassword }>
                    <Text style={styles.title}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wrapButton} onPress={handleLogin} >
              
                    <Text style={styles.titleButton}>LOGIN </Text> 
                </TouchableOpacity>
            
                <View style={styles.wrapTitle}>
                    <Text>Don't have an account yet?</Text>
                    <TouchableOpacity>
                        <Text style={[styles.title, { textDecorationLine: 'underline' }]} onPress={navigateToSignUp}> Sign up</Text>
                    </TouchableOpacity>
                </View>
            
            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      marginHorizontal:25
      
    },

    wrap:{
      alignItems: 'center',

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

    input: {
        height: 55,
        borderColor: colors.darkGrey,
        borderBottomWidth:1,
        marginBottom: 24,
        paddingLeft: 8,
        width: 327,
        color:colors.extraDarkGrey
    },
    passwordInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    wrapTitle:{
        flexDirection:'row',
       justifyContent:'center',
       
    
    },

    wrapButton:{
        backgroundColor: colors.green,
        borderRadius: 5,
        paddingVertical: 10,
        marginTop:30,
        marginBottom:50
        
    },

    titleButton: {
        fontSize: 12,
        color: colors.white, 
        textAlign:'center'
    },

    title:{
        fontSize:14,
        color:colors.green,
        textAlign:'right',
        textDecorationLine:'underline'
    },
    eyeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
})