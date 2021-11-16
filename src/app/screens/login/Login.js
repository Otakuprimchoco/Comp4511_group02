import color from "color";
import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { AuthContext } from "../../services/Context";
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';

import Users from '../../model/users';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [secureTextEntryLogin, setSecureTextEntryLogin] = useState(true);

  const {signIn} = useContext(AuthContext);

  const loginHandle = (email, password) => {
    const foundUser = Users.filter( item => {
      return email == item.email && password == item.password;
    });

    if (isValidEmail == 0 || isValidPassword == 0) {
      setIsValidPassword(false);//Alert.alert('Invalid Email/Password', [{text: 'Okay'}]);
      setIsValidEmail(false);
    } 

    if (foundUser.length == 0) {
      setIsValidPassword(false);
      setIsValidEmail(false);
      Alert.alert('Invalid User!', 'Email or password is incorrect.', [
        {text: 'Okay'}
      ]);
    } else {
      signIn(foundUser);
    }
  }
  

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image style={styles.image} source={require("../../assets/logos/logo.png")} />
        {(isValidPassword && isValidEmail) 
        ? null 
        : 
        (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>Email and/or Password is incorrect</Text>
          </Animatable.View>
        )}
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

      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>Password</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
        <View style={styles.inputBorder}>
          <TextInput
            style={styles.TextInput1}
            placeholder="Enter Password"
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
    
      <View style={{alignItems: 'flex-end', marginRight: 20}}>
        <TouchableOpacity>
          <Text style={styles.forgot_button} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => {loginHandle(email, password)}}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>


      <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
        <Text style={{fontWeight: 'bold', fontSize: 18,}}>New User? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register01')}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#66B2B2',}}>Register Here</Text>
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
    marginTop: 60,
    backgroundColor: "#008080",
  },

  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});