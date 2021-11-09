import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  onBlur, SafeAreaView, ScrollView, Switch
} from "react-native";
import SwitchButton from 'switch-button-react-native'
import GroupCard from '../../assets/Cards/GroupCard/GroupCard'
import { ListItem, List, Icon, Header, Avatar } from 'react-native-elements'
import profileIcon from '../../assets/icons/profileicon.png'
import ImagePickerExample from  '../../assets/ChangePhoto/ChangePhotoComponent'

export default function CreateGroup1({navigation}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);

  return (
    <View style={styles.container}>
      <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly

          containerStyle={{
            backgroundColor: '#8fcbbc',
            justifyContent: 'space-around',
          }}
          leftComponent={{ icon: 'keyboard-arrow-left', color: 'darkcyan', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: 'New Group', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
          rightComponent={{ icon: 'account-circle', type: 'material-community', color: '#fff'}}
        />
      <View style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
            <Avatar rounded size="large" source={{uri: 'https://picsum.photos/id/237/200/300'}}/>
      </View>
            <ImagePickerExample></ImagePickerExample>
      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>Group Name</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
        <TextInput
          style={styles.nameInput}
          placeholder="Enter your group name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
          value={name}
          onBlur={onBlur}
        />
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>About Group</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Enter a group description"
          placeholderTextColor="#003f5c"
          placeholderStyle={{colour: 'red'}}
          onChangeText={(description) => setDescription(description)}
          value={description}
          onBlur={onBlur}
          multiline={true}
        />
      </View>
      {isPrivate}
      <View style={styles.buttonContainer}>
        <SwitchButton
          onValueChange={(val) => setIsPrivate(val==='Private')}
          text1 = 'Private'
          text2 = 'Public'
          useNativeDriver={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("CreateGroup2", {groupName: name})}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputView: {
    // alignItems: "center",
    margin: 20,
  },
  nameInput: {
    height: 50,
    // flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
  },
  descriptionInput: {
    height: 200,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
    // alignContent: 'flex-start'
  },
  buttonContainer: {
    paddingBottom: 10,
    alignSelf: 'center'
  },
  nextBtn: {
    width: 173,
    height: 52,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008080"
  },
  nextText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  });