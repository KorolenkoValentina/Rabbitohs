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

import {colors} from '../../../../components/Colors';


export default function  UpdatePasswordScreen (){
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

   
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };
    


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>   

                <View style={styles.passwordInput}>
                    <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    secureTextEntry={!showPassword}
                    onChangeText={handlePasswordChange}
                    value={password}
                    required
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
                        <Image source={showPassword ? require('../../images/eye.png') : require('../../images/eye.png')}
                            style={styles.eyeIcon}
                        />
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
                            
            </View>
            <Text style={styles.title}>Forgot password?</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor:colors.lightgrey2,
           
    },

    wrap:{
        backgroundColor: colors.white,
        borderRadius:12,
        alignItems: 'center',
        margin:30,
        paddingTop:20

    },
    
    input: {
        height: 55,
        borderColor: colors.darkGrey,
        borderBottomWidth:1,
        paddingLeft: 8,
        paddingRight: 16,
        width: 295,
        color:colors.extraDarkGrey
    },

    passwordInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
    },

    title:{
        fontSize:14,
        color:colors.green,
        textDecorationLine:'underline',
        textAlign:'center'
    },
    eyeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
})


