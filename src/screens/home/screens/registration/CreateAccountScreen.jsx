import React,{useState} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
  
} from 'react-native';

import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import {colors} from '../../../../components/Colors';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EyeIcon } from '../../../../components/icons/AccountScreenIcons'

export default function  SignUpScreen (){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const navigation = useNavigation();

  

  const handleSignUp = async () => {

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Please fill in all required fields.');
      return;
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;


    if (!passwordRegex.test(password)) {
      Alert.alert('Password must be at least 8  characters long and contain both letters and numbers.');
      return;
    }
  
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match!');
      return;
    }

    const userId = uuidv4();
    console.log(userId);
    const userData = { firstName, lastName, email, password, userId };

    try {

      await AsyncStorage.setItem(`userData_${email}`, JSON.stringify(userData));
        console.log('User data stored successfully:', userData);
      await AsyncStorage.setItem(`userId_${email}`, userId); 
       Alert.alert('Account created successfully!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving data:', error);
      
      Alert.alert('Error creating account. Please try again.');
    }
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
        <Text style={styles.titleHeader}> Create an account </Text>
        <View style={styles.wrapFullNane}>
          <TextInput
            style={[styles.input,{width:155, marginRight:15}]}
            onChangeText={setFirstName}
            value={firstName}
            placeholder="First Name"
          />
          <TextInput
            style={[styles.input,{width:155}]}
            onChangeText={setLastName}
            value={lastName}
            placeholder="Last Name"
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />

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
          {showPassword ? <EyeIcon/> : <EyeIcon/>}    
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
            {showPassword ? <EyeIcon/> : <EyeIcon/>}    
             
          </TouchableOpacity>
        </View>
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

  wrapFullNane:{
    flexDirection:'row',
    justifyContent:'space-between'
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
    marginBottom:30
    
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