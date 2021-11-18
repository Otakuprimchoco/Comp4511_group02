import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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
import InterestList from "../../assets/SelectionList/InterestList";
import * as ImagePicker from 'expo-image-picker';

export default function TwoOptionButton({navigation}) {
  const [publicACC, setPublicACC] = useState(true);
  return (

    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity style={publicACC ? styles.buttonOn : styles.buttonOff} onPress={() => setPublicACC(true)}>
        <Text style={publicACC ? styles.buttonTextOn: styles.buttonTextOff}>Public Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={publicACC ? styles.buttonOff : styles.buttonOn} onPress={() => setPublicACC(false)}>
          <Text style={publicACC ? styles.buttonTextOff : styles.buttonTextOn}>Private Account </Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
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
    fontSize: 20,
    textAlign: 'center',
  },
  buttonTextOff: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});