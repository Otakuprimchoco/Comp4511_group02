import React, {useState} from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddBoothPopup from '../../popups/AddBoothPopup';
import data from '../../sampleUserData/Sample_Event_Data/sample_createdEventData'
import data from '../../../assets/sampleUserData/Sample_Event_Data/sample_createdEventData'


export default function BoothsGridSample() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [isAddBoothPopup, setIsAddBoothPopup] = useState(false);
  const [items, setItems] = React.useState([
    { name: '+', boxColor: '#1abc9c' },
    { name: '+', boxColor: '#2ecc71' },
    { name: '+', boxColor: '#3498db' },
    { name: '+', boxColor: '#9b59b6' },
    { name: '+', boxColor: '#34495e' },
  ]);

  return (
    <FlatGrid
      itemDimension={100}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.boxColor }]}>
          {isAddBoothPopup &&
          <Modal
            animationType="slide"
            transparent={true}
            visible={isAddBoothPopup}
            onRequestClose={() => {
              setIsAddBoothPopup(false);
            }}
          >
          <AddBoothPopup description={eventData.description} closePopupFn={() => {setIsAddBoothPopup(false)}}/>
          </Modal>
        }  
          <TouchableOpacity onPress={() => {setIsAddBoothPopup(true)}}>
          <Text style={styles.itemName}>{item.name}</Text>
          </TouchableOpacity>
          <BouncyCheckbox
            size={20}
            fillColor="black"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "black" }}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  itemName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center', 
    textAlignVertical: 'center', 
    paddingVertical: 10

  },
  itemboxColor: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});