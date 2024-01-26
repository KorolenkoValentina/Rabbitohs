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


import {colors} from '../../../components/Colors';
import { useNavigation } from '@react-navigation/native';

export default function  SignUpScreen (){
  const [firstName, setFirstName] = useState('');
  const [LastName, setLasttName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const navigation = useNavigation();

  const handleSignUp = () => {
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
            <Image source={require('../images/logo.png')} style={styles.logo} />
            <Text style={styles.titleHeader}> Create an account </Text>
            <View style={styles.wrapFullNane}>
                <TextInput
                style={styles.input}
                onChangeText={setFirstName}
                value={firstName}
                placeholder="First Name"
                />
                <TextInput
                style={styles.input}
                onChangeText={setLasttName}
                value={LastName}
                placeholder="First Name"
                />
            </View>

            <View style={styles.passwordInput}>
                <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                onChangeText={handlePasswordChange}
                value={password}
                required
                />
                <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
                    <Image source={showPassword ? require('../images/eye.png') : require('../images/eye.png')}
                    style={styles.eyeIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.passwordInput}>
                <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                secureTextEntry={!showPassword}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                required
                />
                <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
                    <Image source={showPassword ? require('../images/eye.png') : require('../images/eye.png')}
                        style={styles.eyeIcon}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.wrapButton} onPress={handleSignUp} >
                <Text style={styles.titleButton}>SUBMIT</Text> 
            </TouchableOpacity>
            <View style={styles.wrapTitle}>
                <Text>Already have an account?</Text>
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