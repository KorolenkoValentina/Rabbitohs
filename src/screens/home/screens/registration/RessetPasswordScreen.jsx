import React,{useState} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image
  
} from 'react-native';


import {colors} from '../../../../components/Colors';
import { useNavigation } from '@react-navigation/native';
import {EyeIcon } from '../../../../components/icons/AccountScreenIcons'

export default function  SignUpScreen (){
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const navigation = useNavigation();

  const handleConfirm = () => {
    // Додайте вашу логіку реєстрації тут
    console.log('Signing up...');
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const navigateToLogIn = () => {
    navigation.navigate('Login');
  };
    

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
            <Image source={require('../../images/logo.png')} style={styles.logo} />
            <Text style={styles.titleHeader}> Resset password </Text>

            <View style={styles.passwordInput}>
                <TextInput
                style={styles.input}
                placeholder="New password"
                secureTextEntry={!showPassword}
                onChangeText={handlePasswordChange}
                value={password}
                required
                />
                <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
                  {showPassword ? <EyeIcon/> : <EyeIcon/>}    
                </TouchableOpacity>
            </View>
            <View style={styles.passwordInput}>
                <TextInput
                style={styles.input}
                placeholder="Confirm new password"
                secureTextEntry={!showPassword}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                required
                />
                <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
                    <Image source={showPassword ? require('../../images/eye.png') : require('../../images/eye.png')}
                        style={styles.eyeIcon}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.wrapButton} onPress={handleConfirm} >
                <Text style={styles.titleButton}>Confirm</Text> 
            </TouchableOpacity>
            <View style={styles.wrapTitle}>
                <Text>I remember my password</Text>
                <TouchableOpacity>
                    <Text style={[styles.title, { textDecorationLine: 'underline' }]} onPress={navigateToLogIn}> Login</Text>
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

  wrapFullNane:{
    flexDirection:'row',
    justifyContent:'space-between'
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
    passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
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
  eyeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
})