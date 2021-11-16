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
import {Avatar, Icon} from 'react-native-elements';
import ImagePickerExample from  '../../assets/ChangePhoto/ChangePhotoComponent'
import InterestList from "../../assets/SelectionList/JustInterestList";
import * as ImagePicker from 'expo-image-picker';
import MainButton from '../../assets/buttons/MainButton';
import ProfileHeader from '../../assets/Header/ProfileHeader'

import ToggleSwitch from 'rn-toggle-switch';
import Constants from 'expo-constants';

import { AuthContext } from "../../services/Context";
import LiveEventHeader from "../../assets/Header/LiveEventHeader";

import Root from '../../assets/popups/ShareScreen/Root';
import Broadcast from '../../assets/popups/ShareScreen/Broadcast';

export default function LiveEvent({navigation}) {
    const [mic, setMic] = useState(true);
    const [cam, setCam] = useState(true);
    return(
      <Root>
        <View style={styles.container}>
          <View style={styles.header}>
            <LiveEventHeader nav={navigation} title="UNSW Engineering Career Fair" booth="Telstra"></LiveEventHeader>
          </View>

          <View style={styles.midContainer}>

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

                <TouchableOpacity style={styles.icons} onPress={() =>
                  Broadcast.show({
                    type: 'UserProfilePopUp',
                    title: "eventName",
                    nav: navigation,
                    textBody: "hello",
                    friends: true,
                    callback: () => Broadcast.hide(),
                })}>
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
    backgroundColor: "grey",
    width: '100%',
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
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
    justifyContent: 'flex-start'
  },
  navView: {
    flexDirection: 'row', margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    color: '#fff',
    padding: 5,
  },
  icons: {
    margin: 13,
  }
});