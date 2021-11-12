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
  onBlur
} from "react-native";
import { Appbar } from 'react-native-paper';
import InterestList from "../../assets/SelectionList/JustInterestList";


import { AuthContext } from "../../services/Context";

export default function Register02({navigation}) {

  const {signUp } = useContext(AuthContext);

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <View>

    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>

    <View style={styles.question}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color:'#008080'}}>Please select atleast one interest</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
      </View>

    <View style={{margin: 10}}>
      <InterestList></InterestList>
    </View>
   
   <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.loginBtn}  onPress={() => {signUp()}}>
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
    flex: 1,
    padding: 20,
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
    marginTop: 60,
    backgroundColor: "#008080",
  },

  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  question: {
    backgroundColor:'#B2D8D8',
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingTop: 5,
    marginTop: 20,
  }
});