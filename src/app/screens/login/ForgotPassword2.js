import React, { useState, useContext } from 'react';
import { 
    TextInput, StyleSheet, Text, View, TouchableOpacity, Image,
    Alert } from 'react-native';
import { Appbar, Switch } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from "../../services/Context";
import { Icon } from 'react-native-elements';

export default function ForgotPassword2 ({navigation}){
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidCode, setIsValidCode] = useState(true);
    const [secureTextEntryLogin, setSecureTextEntryLogin] = useState(true);
    const [secureTextEntryLogin1, setSecureTextEntryLogin1] = useState(true);

    const {signIn} = useContext(AuthContext);

    const loginHandle = () => {
        const foundUser = Users.filter( item => {
            return code == item.userToken;
        });

        if (isValidCode == 0 || isValidPassword == 0  || confirmPassword == 0) {
            setIsValidPassword(false);//Alert.alert('Invalid Email/Password', [{text: 'Okay'}]);
            setIsValidCode(false);
        } else if (password != confirmPassword) {
            setIsValidPassword(false);
            Alert.alert('Invalid Input!', 'Passwords do not match.', [
              {text: 'Okay'}
            ]);
        } else if (foundUser.length == 0) {
            setIsValidPassword(false);
            setIsValidCode(false);
            Alert.alert('Invalid Code!', 'Code is incorrect.', [
                {text: 'Okay'}
            ]);
        } else {
            foundUser[0].password = password;
            signIn(foundUser);
        }
    }

    const _goBack = () => navigation.pop();

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
      <View style={{backgroundColor: "#fff"}}>
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Title" subtitle="Subtitle" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>

        <View style={{alignItems: 'center', backgroundColor: "#fff"}}>
            <Image style={styles.image} source={require("../../assets/logos/logo.png")} />
            {(isValidPassword && isValidCode) 
            ? null 
            : 
            (
            <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>Code and/or Password is incorrect</Text>
            </Animatable.View>
            )}
        </View>

        <View style={styles.inputView}>
            <View style={{flexDirection: 'row', paddingBottom: 5}}>
            <Text style={{fontWeight: 'bold', fontSize: 14,}}>Code</Text>
            <Text style={{color: 'red'}}>*</Text>
            </View>
            <TextInput
            style={styles.TextInput}
            placeholder="Enter Code that was sent to email"
            placeholderTextColor="#003f5c"
            onChangeText={(code) => setCode(code)}
            value={code}
            />
        </View>

        <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>New Password</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
        <View style={styles.inputBorder}>
          <TextInput
            style={styles.TextInput1}
            placeholder="Enter New Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={secureTextEntryLogin}
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
           <View>
            <TouchableOpacity style={{margin: 10}} onPress={() => {setSecureTextEntryLogin(!secureTextEntryLogin)}}>
              {secureTextEntryLogin ? 
                <Icon 
                    name="eye-slash"
                    type='font-awesome'
                />
              :
                <Icon 
                    name="eye"
                    type='font-awesome'
                />
              }
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>Confirm New Password</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
        <View style={styles.inputBorder}>
          <TextInput
            style={styles.TextInput1}
            placeholder="Enter New Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={secureTextEntryLogin1}
            onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
            value={confirmPassword}
          />
          <View>
            <TouchableOpacity style={{margin: 10}} onPress={() => {setSecureTextEntryLogin1(!secureTextEntryLogin1)}}>
              {secureTextEntryLogin1 ? 
                <Icon 
                    name="eye-slash"
                    type='font-awesome'
                />
              :
                <Icon 
                    name="eye"
                    type='font-awesome'
                />
              }
            </TouchableOpacity>
          </View>
        </View>
      </View>

        <View style={{alignItems: 'center', backgroundColor: "#fff"}}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => {loginHandle()}}>
            <Text style={styles.loginText}>Confirm</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      backgroundColor: "#fff"
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
    },
    TextInput1: {
      height: 50,
      paddingLeft: 20,
      width: "85%",
      borderRadius: 10,
    },
    inputBorder: {
      borderWidth: 1,
      width: "100%",
      borderRadius: 10, flexDirection: 'row'
    }
  });