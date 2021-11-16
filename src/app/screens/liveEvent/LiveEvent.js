import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  onBlur, SafeAreaView, ScrollView,
} from "react-native";
import { Appbar, Switch } from 'react-native-paper';
import {Avatar} from 'react-native-elements';
import ImagePickerExample from  '../../assets/ChangePhoto/ChangePhotoComponent'
import InterestList from "../../assets/SelectionList/JustInterestList";
import * as ImagePicker from 'expo-image-picker';
import MainButton from '../../assets/buttons/MainButton';
import ProfileHeader from '../../assets/Header/ProfileHeader'

import ToggleSwitch from 'rn-toggle-switch';
import Constants from 'expo-constants';

import { AuthContext } from "../../services/Context";
import LiveEventHeader from "../../assets/Header/LiveEventHeader";

export default function LiveEvent({navigation}) {
    return(
        <View>
            <LiveEventHeader nav={navigation} title="UNSW Engineering Career Fair" booth="Telstra"></LiveEventHeader>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonOff: {
    backgroundColor: "#ffffff", 
    borderColor: 'grey', 
    borderWidth: 2, 
    width: 175, 
    height: 50,
    justifyContent: 'center',

  },
  buttonOn: {
    backgroundColor: "#008080", 
    width: 175, 
    height: 50,
    justifyContent: 'center',
  },
  buttonTextOn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonTextOff: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  createBtn: {
    width: 160,
    height: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008080",
    padding: 20,
  },
  createText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    marginBottom: 40,
    width: 200, 
    height: 200,
  },

  inputView: {
    alignItems: "flex-start",
    margin: 10,
  },

  formInput: {
    marginTop: 30,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
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
  question: {
    backgroundColor:'#B2D8D8',
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingTop: 5,
  },
  image: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  createBtn1: {
    width: 173,
    height: 52,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008080"
  },
  createText1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});