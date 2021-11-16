import React, { useState } from "react";
import { onBlur, StyleSheet, Text, TextInput, View, ScrollView} from "react-native";
import { Avatar, Header } from 'react-native-elements';
import MainButton from "../../../assets/buttons/MainButton";
import ImagePickerExample from '../../../assets/ChangePhoto/ChangePhotoComponent';
import ButtonSlider from "../../../assets/FormInput/ButtonSlider";
import ModalDatePicker from "./ModalDatePicker";
import NumberPlease from "react-native-number-please";
import ModalTimePicker from "./ModalTimePicker";
import Header1 from "../../../assets/Header/Header1";

export default function AddEvent ( { navigation } ) {
  const [name, setName] = useState( "" );
  const [description, setDescription] = useState( "" );
  const [isPrivate, setIsPrivate] = useState( true );
  const initialCapacity = [{ id: "capacity", value: 3 }];
  const [capacity, setcapacity] = useState(initialCapacity);
  const capNumbers = [{ id: "capacity", min: 0, max: 200 }];

  return (
    <View style={styles.container}>
      <Header1 title='Add Events' nav={navigation}></Header1>

      <ScrollView>
      <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
        <ImagePickerExample></ImagePickerExample>
      </View>
      <View style={styles.inputView}>
        <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 14, }}>Event Name</Text>
          <Text style={{ color: 'red' }}> *</Text>
        </View>
        <TextInput
          style={styles.nameInput}
          placeholder= "Enter your event name"
          placeholderTextColor="#003f5c"
          onChangeText={( name ) => setName( name )}
          value={name}
          onBlur={onBlur}
        />

        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "row"}}>
              <Text style={{ fontWeight: 'bold', fontSize: 14,marginTop: 20 }}>Event Date:</Text>
          </View>
          <View style={{flexDirection: "row"}}>
              <Text style={{ fontWeight: 'bold', fontSize: 14,marginTop: 20, marginLeft: "50%" }}>Event Time:</Text>
          </View>
        </View>


        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "row"}}>
              <ModalDatePicker/>
          </View>
          <View style={{flexDirection: "row", marginLeft: "10%"}}>
              <ModalTimePicker/>
          </View>
        </View>


        <View style={{ flexDirection: 'row', paddingBottom: 5, marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 14, }}>Event Description</Text>
          <Text style={{ color: 'red' }}> *</Text>
        </View>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Enter an event description"
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
      <View style={{marginLeft: 20}}>
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Capacity:</Text>
          <NumberPlease
            // pickerStyle={{height: 50}}
            itemStyle={{height: 100}}
            digits={capNumbers}
            values={capacity}
            onChange={(values) => setcapacity(values)}
          />
      </View>
      <View style={styles.buttonContainer}>
        <MainButton text={"Next"} onPressFn={() => navigation.navigate( "AddEvent2", { eventName: name } )}/>
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
    alignSelf: 'center'
  },
} );
