import React, { useState } from "react";
import {
  onBlur, StyleSheet,
  Text, TextInput, TouchableOpacity, View, ScrollView
} from "react-native";
import { Avatar, Header } from 'react-native-elements';
import SwitchButton from 'switch-button-react-native';
import MainButton from "../../assets/buttons/MainButton";
import ImagePickerExample from '../../assets/ChangePhoto/ChangePhotoComponent';
import ButtonSlider from "../../assets/FormInput/ButtonSlider";
import InterestList from "../../assets/SelectionList/InterestList";
import data from '../../assets/sampleUserData/sample_groupPageData'
import Header1 from '../../assets/Header/Header1'




export default function GroupSettings ( { route, navigation } ) {
  // TODO: Implement data retrieval
  const groupData = data[1]
  const [name, setName] = useState( "" );
  const [description, setDescription] = useState( "" );
  const [isPrivate, setIsPrivate] = useState( true );

  function deleteGroup({groupData}) {
    console.log("Deleting group ")
    navigation.pop()
    // TODO
  }

  return (
    <View style={styles.container}>
      <Header1 title='Group Settings' nav={navigation}></Header1>
      <ScrollView contentContainerStyle={{justifyContent: 'flex-start'}}>
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10, }}>
          <ImagePickerExample></ImagePickerExample>
        </View>
        <View style={styles.inputView}>
          <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, }}>Group Name</Text>
            <Text style={{ color: 'red' }}> *</Text>
          </View>
          <TextInput
            style={styles.nameInput}
            placeholder= "Enter your group name"
            placeholderTextColor="#003f5c"
            onChangeText={( name ) => setName( name )}
            value={name}
            onBlur={onBlur}
          />
          <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, }}>About Group</Text>
            <Text style={{ color: 'red' }}> *</Text>
          </View>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Enter a group description"
            placeholderTextColor="#003f5c"
            placeholderStyle={{ colour: 'red' }}
            onChangeText={( description ) => setDescription( description )}
            value={description}
            onBlur={onBlur}
            multiline={true}
          />
        </View>
        {isPrivate}
        <View style={styles.buttonContainer}>
          <ButtonSlider textL="Private" textR="Public" toggleFn={() => setIsPrivate(!isPrivate)}/>
        </View>
        <InterestList></InterestList>
        <View style={styles.deleteGroupContainer}>
          <MainButton text={"Delete Group"} onPressFn={() => deleteGroup(groupData)}/>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create( {
  container: {
    flex: 1
  },
  deleteGroupContainer: {
    paddingBottom: 10,
    alignSelf: 'center'
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
} );
