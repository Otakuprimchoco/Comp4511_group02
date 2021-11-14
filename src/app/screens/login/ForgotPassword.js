import React, { useState } from 'react';
import { 
    TextInput, StyleSheet, Text, View, TouchableOpacity, Image,
    Alert } from 'react-native';
import { Appbar, Switch } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Users from '../../model/users';

export default function ForgotPassword({navigation}){
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);

    const _goBack = () => navigation.pop();//

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    const forgotPasswordHandle = () => {
        const foundUser = Users.filter( item => {
          return email == item.email;
        });
    
        if (isValidEmail == 0 ) {
          setIsValidEmail(false);
        } 
    
        if (foundUser.length == 0) {
          setIsValidEmail(false);
        } else {
            navigation.navigate('ForgotPassword2');
        }
      }

    return (
      <View style={styles.container}>
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Title" subtitle="Subtitle" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>

        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Image style={styles.image} source={require("../../assets/logos/logo.png")} />
                {(isValidEmail) 
                ? null 
                : 
                (
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>Email does not exist in the database</Text>
                </Animatable.View>
                )}
            </View>
            <View style={styles.container2} >
                <Text style={{textAlign: 'center'}}>A code will be sent to the provided email address</Text>
            </View>
            <View style={styles.inputView}>
                <View style={{flexDirection: 'row', paddingBottom: 5}}>
                <Text style={{fontWeight: 'bold', fontSize: 14,}}>Email</Text>
                <Text style={{color: 'red'}}>*</Text>
                </View>
                <TextInput
                style={styles.TextInput}
                placeholder="Enter Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
                value={email}
                />
            </View>

            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {forgotPasswordHandle()}}>
                <Text style={styles.loginText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      flex: 1,
      backgroundColor: "#fff"
    },
    container2: {
        alignItems: 'center',
    },
  
    image: {
      marginBottom: 40,
      width: 200, 
      height: 200,
    },
  
    inputView: {
      alignItems: "flex-start",
      margin: 20,
    },
  
    TextInput: {
      height: 50,
      paddingLeft: 20,
      borderWidth: 1,
      width: "100%",
      borderRadius: 10,
    },
  
    forgot_button: {
      fontWeight: 'bold',
      color: '#66B2B2',
      fontSize: 15,
    },
  
    loginBtn: {
      width: 94,
      height: 52,
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#008080",
    },
  
    loginText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    }
  });