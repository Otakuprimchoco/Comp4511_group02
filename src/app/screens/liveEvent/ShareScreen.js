import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  onBlur, SafeAreaView, ScrollView,
} from "react-native";
import { Appbar, Switch } from 'react-native-paper';
import {Avatar, Icon} from 'react-native-elements';
import ImagePickerExample from  '../../assets/ChangePhoto/ChangePhotoComponent'
import InterestList from "../../assets/SelectionList/JustInterestList";
import * as ImagePicker from 'expo-image-picker';
import MainButton from '../../assets/buttons/MainButton';
import ProfileHeader from '../../assets/Header/ProfileHeader'

import ToggleSwitch from 'rn-toggle-switch';
import Constants from 'expo-constants';

import { AuthContext } from "../../services/Context";
import ShareScreenHeader from "../../assets/Header/ShareScreenHeader";

import Root from '../../assets/popups/ShareScreen/Root';
import Broadcast from '../../assets/popups/ShareScreen/Broadcast';

export default function ShareScreen({navigation}) {
    const [mic, setMic] = useState(true);
    const [cam, setCam] = useState(true);
    return(
      <Root>
        <View style={styles.container}>
          <View>
            <ShareScreenHeader nav={navigation} title="UNSW Engineering Career Fair"></ShareScreenHeader>
          </View>

          <View style={styles.midContainer}>
            <ImageBackground source={require('../../assets/shareScreen.png')} resizeMode="cover" style={styles.image}>
            </ImageBackground>
          </View>

          <View style={styles.header}>
              <TouchableOpacity style={styles.shareScreenButton} onPress={()=> navigation.navigate("LiveEvent")}>
                <Text style={styles.shareScreenText}>Stop Sharing Screen</Text>
              </TouchableOpacity>
          </View>
          
            <View style={styles.navContainer}>

              <View style={styles.navView}>
                <TouchableOpacity style={styles.icons} onPress={()=> setCam(!cam)}>
                  {cam ? 
                    <Icon name='videocam'type='material' size={40} color='white'/>
                    :
                    <Icon name='videocam-off'type='material' size={40} color='white'/>
                  }
                  <Text style={styles.navText}>Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons} onPress={()=> setMic(!mic)}>
                  {mic ?
                  <Icon name='mic'type='material' size={40} color='white'/>
                  :
                  <Icon name='mic-off'type='material' size={40}  color='white'/>
                  }
                  <Text style={styles.navText}>Microphone</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate("ChatRoom", "User1")}>
                  <Icon name='forum'type='material' size={40}  color='white' underlayColor='pink'/>
                  <Text style={styles.navText}>Chat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons}>
                  <Icon name='mobile-screen-share' type='material' size={40}  color='white'/>
                  <Text style={styles.navText}>Share Screen</Text>
                </TouchableOpacity>

              </View>
            </View>
        </View>
      </Root>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  midContainer: {
    width: '100%',
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  navContainer: {
    backgroundColor: 'rgba(0,0,0, 0.4)',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height:  90,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 110
  },
  navView: {
    flexDirection: 'row', 
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    color: '#fff',
    padding: 5,
  },
  icons: {
    margin: 13,
  },
  shareScreenButton: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 13,
    height: 33,
    borderWidth: 1,
    borderColor: 'white',
  },
  shareScreenText: {
    color: 'red',
    fontSize: 20
  }
});