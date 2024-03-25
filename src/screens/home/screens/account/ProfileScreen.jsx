import React,{useState, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  
} from 'react-native';

import {colors} from '../../../../components/Colors';
import { CalendarIcon, ArrowRightIcon } from '../../../../components/icons/AccountScreenIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { FacebookIcon,TikTokIcon,TwitterIcon,InstagramIcon } from '../../../../components/icons/SocialIcon';





export default function  ProfileScreen ({ navigation, route }){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [gender, setGender] =  useState('')
    const [number, onChangeNumber] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [tikTok, setTikTok] = useState('');
    const [avatar, setAvatar] = useState(null);


    useEffect(() => {
        // Перевірте, чи є дані користувача в параметрах маршруту
        if (route.params?.userData) {
          const { firstName, lastName, email } = route.params.userData;
          setFirstName(firstName);
          setLastName(lastName);
          setEmail(email);
        }
      }, [route.params?.userData]);

    const selectImage = () => {
        const options = {
          mediaType: 'photo', // Тип медіа - фотографія
        };
    
        launchImageLibrary(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error:', response.error);
          } else {
            const source = { uri: response.uri };
            setAvatar(source);
          }
        });
      };



    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`;
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || birthdate;
        setShowDatePicker(false);
        setBirthdate(currentDate);
    };
    

    const openGenderSelection = () => {
        navigation.navigate('Choose gender', { selectedGender: gender });
    };
    useEffect(() => {
        if (route.params?.selectedGender) {
          setGender(route.params.selectedGender);
        }
    }, [route.params?.selectedGender]);


    const handleSaveChanges = async () => {
        try {
          const userData = { firstName, lastName, email, birthdate, gender, number, facebook, twitter, instagram, tikTok };
          await AsyncStorage.setItem('userData', JSON.stringify(userData));
          navigation.replace('Account');
        } catch (error) {
          console.error('Error saving data:', error);
        }
      };

   

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.wrap}>  
                <TouchableOpacity style={styles.avatarContainer} onPress={selectImage}>
                    {avatar ? (
                    <Image source={avatar} style={styles.avatar} />
                    ) : (
                    <View style={styles.defaultAvatar}>
                        <Text style={styles.plus}>+</Text>
                    </View>
                    )}
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={[styles.input,{width:139, marginRight:15}]}
                    placeholder="First Name"
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    />
                    <TextInput
                    style={[styles.input,{width:139}]}
                    placeholder="Last Name"
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    />
                </View>
                <View style={styles.inputContainer}>
          
                    <TextInput
                    style={styles.input}
                    placeholder="Select Gender"
                    editable={false} 
                    value={gender}
                    />
                    <TouchableOpacity onPress={openGenderSelection}>
                        <ArrowRightIcon color={colors.green}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
          
                    <TextInput
                    style={styles.input}
                    placeholder="Date of birth"
                    editable={false} 
                    value={formatDate(birthdate)}
                    />
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <CalendarIcon color={colors.green}/>
                    </TouchableOpacity>
                    {showDatePicker && (
                    <DateTimePicker
                    value={birthdate}
                    mode="date"
                    display="spinner"
                    onChange={handleDateChange}
                    />
                    )}                    
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeNumber(text.replace(/\D/g, ''))}
                    value={number.replace(/\D/g, '')}
                    placeholder="Mobile"
                    keyboardType="numeric"
                    maxLength={12}
                    required
                    />
                </View>
            
            </View>
            <View style={styles.wrap}>
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialIcon} onPress={() => {/* Додайте логіку для відкриття вікна введення посилання Facebook */}}>
                        <FacebookIcon/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Facebook URL"
                        onChangeText={(text) => setFacebook(text)}
                        value={facebook}
                    />

                </View>

                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialIcon} onPress={() => {/* Додайте логіку для відкриття вікна введення посилання Facebook */}}>
                        <InstagramIcon/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Instagram URL"
                        onChangeText={(text) => setInstagram(text)}
                        value={instagram}
                    />

                </View>
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialIcon} onPress={() => {/* Додайте логіку для відкриття вікна введення посилання Facebook */}}>
                        <TikTokIcon/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="TikTok URL"
                        onChangeText={(text) => setTikTok(text)}
                        value={tikTok}
                    />

                </View>
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialIcon} onPress={() => {/* Додайте логіку для відкриття вікна введення посилання Facebook */}}>
                        <TwitterIcon/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Twitter URL"
                        onChangeText={(text) => setTwitter(text)}
                        value={twitter}
                    />

                </View>



            </View>

            <TouchableOpacity   style={styles.wrapButton}  onPress={handleSaveChanges}>
              <Text style={styles.titleButton}>Save changes</Text> 
            </TouchableOpacity>
            </ScrollView>
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
        margin:25,
        paddingVertical:15

    },
    
    input: {
        height: 55,
        paddingLeft: 8,
        paddingRight: 16,    
        color:colors.extraDarkGrey,
        fontSize:11
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor: colors.darkGrey,
        width: 295,
    },

    socialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
        borderBottomWidth:1,
        width: 295,
        borderColor: colors.darkGrey,
    },
    socialIcon: {
        marginRight: 10,
    },

    wrapButton:{
        width:'87%',
        backgroundColor: colors.green,
        borderRadius: 5,
        paddingVertical: 15,
        margin:25
        
    },
    titleButton: {
        fontSize: 12,
        color: colors.white, 
        textAlign:'center'
                 
    },



    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 75,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 75,
      },
      defaultAvatar: {
        width: 100,
        height: 100,
        borderRadius: 75,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
      },
      plus: {
        fontSize: 50,
        color: 'gray',
      },
   
   

   
})
