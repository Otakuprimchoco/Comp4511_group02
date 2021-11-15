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

import ToggleSwitch from 'rn-toggle-switch';
import Constants from 'expo-constants';

import { AuthContext } from "../../services/Context";

export default function Profile({route, navigation}) {

  const { userToken } = route.params;
  const foundUser = Users.filter( item => {
    return userToken == item.userToken;
  });

  // const email = String(foundUser[0].email);

  const [publicACC, setPublicACC] = useState(foundUser[0].publicACC);
  const [groupNotif, setGroupNotif] = useState(foundUser[0].groupNotif);
  const [eventNotif, setEventNotif] = useState(foundUser[0].eventNotif);
  const [chatNotif, setChatNotif] = useState(foundUser[0].chatNotif);

  const [role, setRole] = useState(foundUser[0].role);
  const [about, setAbout] = useState(foundUser[0].about);
  const [name, setName] = useState(foundUser[0].name);

  const [isSwitchOn, setIsSwitchOn] = useState(foundUser[0].namePublic);// don't think these are being used by the swutch
  const [isSwitchOn2, setIsSwitchOn2] = useState(foundUser[0].rolePublic);
  const [isSwitchOn3, setIsSwitchOn3] = useState(foundUser[0].aboutPublic);

  const [image, setImage] = useState(foundUser[0].image);

  useEffect (() => {
    console.log(Users.filter( item => {
      return userToken == item.userToken;
    }));
    foundUser[0].publicACC = publicACC;
    foundUser[0].groupNotif = groupNotif;
    foundUser[0].eventNotif = eventNotif;
    foundUser[0].chatNotif = chatNotif;
    foundUser[0].role = role;
    foundUser[0].about = about;
    foundUser[0].name = name;
    foundUser[0].namePublic = isSwitchOn; // don't think these are being used by the swutch
    foundUser[0].rolePublic = isSwitchOn2;
    foundUser[0].aboutPublic = isSwitchOn3;
    foundUser[0].image = image;
  });

  const {signOut} = useContext(AuthContext);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const _goBack = () => navigation.pop();//

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  useEffect(() => {
    //IIFE
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== ImagePicker.PermissionStatus.GRANTED) {
        alert("Please grant photo permissions in settings");
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>

    <Appbar.Header style={{ backgroundColor: '#66B2B2' }}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="" subtitle="" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>

    <View style={{alignItems: 'center', padding: 10}}>
      <Image source={{uri: image}} style={styles.image}/>
      <View style={{padding: 10 }}>
        <TouchableOpacity style={styles.createBtn1} onPress={pickImage}>
          <Text style={styles.createText1}>Change Photo</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity style={publicACC ? styles.buttonOn : styles.buttonOff} onPress={() => setPublicACC(true)}>
        <Text style={publicACC ? styles.buttonTextOn: styles.buttonTextOff}>Public Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={publicACC ? styles.buttonOff : styles.buttonOn} onPress={() => setPublicACC(false)}>
          <Text style={publicACC ? styles.buttonTextOff : styles.buttonTextOn}>Private Account</Text>
      </TouchableOpacity>
    </View>
    
    <View style={styles.formInput}>
      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>Full Name</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
        <TextInput
          style={styles.TextInput}
          placeholder={name}
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
          value={name}
          onBlur={onBlur}
        />
<View style={{marginLeft: 10}}>
        <ToggleSwitch
          text={{on: 'Public', off: 'Private', activeTextColor: 'white', inactiveTextColor: '#008080'}}
          textStyle={{fontWeight: 'bold', fontSize: 18}}
          color={{ indicator: 'white', active: '#008080', inactive:  'white', activeBorder: '#41B4A4', inactiveBorder: '#41B4A4'}}
          active={true}
          disabled={false}
          width={80}
          radius={25}
          onValueChange={(val) => {}}
        />
        </View>
      </View>
      </View>

      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>Role</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
        <TextInput
          style={styles.TextInput}
          placeholder={role}
          placeholderTextColor="#003f5c"
          onChangeText={(role) => setRole(role)}
          value={role}
        />
        <View style={{marginLeft: 10}}>
        <ToggleSwitch
          text={{on: 'Public', off: 'Private', activeTextColor: 'white', inactiveTextColor: '#008080'}}
          textStyle={{fontWeight: 'bold', fontSize: 18}}
          color={{ indicator: 'white', active: '#008080', inactive:  'white', activeBorder: '#41B4A4', inactiveBorder: '#41B4A4'}}
          active={true}
          disabled={false}
          width={80}
          radius={25}
          onValueChange={(val) => {}}
        />
        </View>
      </View>
      </View>

      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>About/Interests</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
        <TextInput
          style={styles.TextInput}
          placeholder={about}
          placeholderTextColor="#003f5c"
          onChangeText={(about) => setAbout(about)}
          value={about}
        />
        <View style={{marginLeft: 10}}>
        <ToggleSwitch
          text={{on: 'Public', off: 'Private', activeTextColor: 'white', inactiveTextColor: '#008080'}}
          textStyle={{fontWeight: 'bold', fontSize: 18}}
          color={{ indicator: 'white', active: '#008080', inactive:  'white', activeBorder: '#41B4A4', inactiveBorder: '#41B4A4'}}
          active={true}
          disabled={false}
          width={80}
          radius={25}
          onValueChange={(val) => {}}
        />
        </View>
        
        </View>
      </View>
      </View>

      <View style={styles.question}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color:'#008080'}}>Notifications for Groups</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 40,}}>
        <TouchableOpacity style={groupNotif ? styles.buttonOn : styles.buttonOff} onPress={() => setGroupNotif(true)}>
          <Text style={groupNotif ? styles.buttonTextOn: styles.buttonTextOff}>On</Text>
        </TouchableOpacity>
        <TouchableOpacity style={groupNotif ? styles.buttonOff : styles.buttonOn} onPress={() => setGroupNotif(false)}>
            <Text style={groupNotif? styles.buttonTextOff : styles.buttonTextOn}>Off</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.question}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color:'#008080'}}>Notifications for Events</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 40,}}>
        <TouchableOpacity style={eventNotif ? styles.buttonOn : styles.buttonOff} onPress={() => setEventNotif(true)}>
          <Text style={eventNotif ? styles.buttonTextOn: styles.buttonTextOff}>On</Text>
        </TouchableOpacity>
        <TouchableOpacity style={eventNotif ? styles.buttonOff : styles.buttonOn} onPress={() => setEventNotif(false)}>
            <Text style={eventNotif? styles.buttonTextOff : styles.buttonTextOn}>Off</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.question}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color:'#008080'}}>Notifications for Chat</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 40,}}>
        <TouchableOpacity style={chatNotif ? styles.buttonOn : styles.buttonOff} onPress={() => setChatNotif(true)}>
          <Text style={chatNotif ? styles.buttonTextOn: styles.buttonTextOff}>On</Text>
        </TouchableOpacity>
        <TouchableOpacity style={chatNotif ? styles.buttonOff : styles.buttonOn} onPress={() => setChatNotif(false)}>
            <Text style={chatNotif? styles.buttonTextOff : styles.buttonTextOn}>Off</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.question}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color:'#008080'}}>Please select atleast one interest</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
      </View>

      <View style={{margin: 10}}>
        <InterestList></InterestList>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{margin: 20}}>
          <TouchableOpacity style={styles.createBtn} onPress={() => navigation.navigate('ChangePassword')}>
            <Text style={styles.createText}>Change</Text>
            <Text style={styles.createText}>Password</Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 20}}>
          <TouchableOpacity style={styles.createBtn} onPress={() => {signOut()}}>
            <Text style={styles.createText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </ScrollView>
    
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