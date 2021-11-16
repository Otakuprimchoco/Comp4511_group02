import React, { useState } from "react";
import { onBlur, StyleSheet, Text, TextInput, View, ScrollView} from "react-native";
import { Avatar, Header } from 'react-native-elements';
import MainButton from "../../../assets/buttons/MainButton";
import ImagePickerExample from '../../../assets/ChangePhoto/ChangePhotoComponent';
import ButtonSlider from "../../../assets/FormInput/ButtonSlider";
import ModalDatePicker from "./ModalDatePicker";
import NumberPlease from "react-native-number-please";
import ModalTimePicker from "./ModalTimePicker";
import ChangeBoothTile from "../../../assets/ChangePhoto/ChangeBoothTile";
import Header1 from "../../../assets/Header/Header1";

export default function AddBoothScreen ( { navigation } ) {
  const [name, setName] = useState( "" );
  const [description, setDescription] = useState( "" );
  const [isPrivate, setIsPrivate] = useState( true );
  const initialCapacity = [{ id: "capacity", value: 3 }];
  const [capacity, setcapacity] = useState(initialCapacity);
  const capNumbers = [{ id: "capacity", min: 0, max: 200 }];

  return (
    <View style={styles.container}>
      <Header1 title='Add Booth' nav={navigation}></Header1>

      <ScrollView>
      {/* <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
        <ImagePickerExample></ImagePickerExample>
      </View> */}
      <View style={styles.inputView}>
        <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 14, }}>Booth Name</Text>
          <Text style={{ color: 'red' }}> *</Text>
        </View>
        <TextInput
          style={styles.nameInput}
          placeholder= "Enter your booth name"
          placeholderTextColor="#003f5c"
          onChangeText={( name ) => setName( name )}
          value={name}
          onBlur={onBlur}
        />

      <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
        <ChangeBoothTile/>
      </View>


        <View style={{ flexDirection: 'row', paddingBottom: 5, marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 14, }}>Description</Text>
          <Text style={{ color: 'red' }}> *</Text>
        </View>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Enter the booth description"
          placeholderTextColor="#003f5c"
          placeholderStyle={{ colour: 'red' }}
          onChangeText={( description ) => setDescription( description )}
          value={description}
          onBlur={onBlur}
          multiline={true}
        />
      </View>
      <View style={styles.inputView}>
        <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 14, }}>Presenter</Text>
          <Text style={{ color: 'red' }}> *</Text>
        </View>
        <TextInput
          style={styles.nameInput}
          placeholder= "Enter presenter's name"
          placeholderTextColor="#003f5c"
          onChangeText={( name ) => setName( name )}
          value={name}
          onBlur={onBlur}
        />
        </View>
        <View style={{flexDirection: "row", marginLeft: "10%"}}>
          <View style={{flexDirection: "row"}}>
              <Text style={{ fontWeight: 'bold', fontSize: 14,marginTop: 20 }}>Start Time:</Text>
          </View>
          <View style={{flexDirection: "row"}}>
              <Text style={{ fontWeight: 'bold', fontSize: 14,marginTop: 20, marginLeft: "50%" }}>End Time:</Text>
          </View>
        </View>


        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "row"}}>
              <ModalTimePicker/>
          </View>
          <View style={{flexDirection: "row", marginLeft: "20%"}}>
              <ModalTimePicker/>
          </View>
        </View>
      <View style={styles.buttonContainer}>
        <MainButton text={"Confirm"} onPressFn={() => navigation.navigate( "BoothAddedCreatedEvent", { eventName: name } )}/>
      </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create( {
  container: {
    flex: 1, 
  },
  inputView: {
    margin: 20,
  },
  nameInput: {
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
  },
  descriptionInput: {
    height: 70,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
  },
  buttonContainer: {
    paddingBottom: 10,
    alignSelf: 'center',
    marginTop: 30
  },
} );
