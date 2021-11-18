import React, { useState } from "react";
import {
  onBlur, ScrollView, StyleSheet,
  Text, TextInput, TouchableOpacity, View
} from "react-native";
import { Avatar, Header } from 'react-native-elements';
import SwitchButton from 'switch-button-react-native';
import MainButton from "../../assets/buttons/MainButton";
import ImagePickerExample from '../../assets/ChangePhoto/ChangePhotoComponent';
import ButtonSlider from "../../assets/FormInput/ButtonSlider";
import Header1 from "../../assets/Header/Header1";
import TwoOptionButton from "../../assets/buttons/TwoOptionButtons";


export default function CreateGroup1 ( { navigation } ) {
  const [name, setName] = useState( "" );
  const [description, setDescription] = useState( "" );
  const [isPrivate, setIsPrivate] = useState( true );

  return (
    <View style={styles.container}>
      <Header1 title="New Group" nav={navigation}/>
      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
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
          <TwoOptionButton toggleFn={() => setIsPrivate(!isPrivate)}/>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton text={"Next"} onPressFn={() => navigation.navigate( "CreateGroup2", { groupName: name } )}/>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create( {
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
    alignSelf: 'center', 
    marginTop: 15,
  },
} );
