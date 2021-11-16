import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function BoothGridAddBooth() {
  const navigation = useNavigation(); 
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [items, setItems] = React.useState([
    { name: 'Aurecon', boxColor: '#1abc9c' },
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
      spacing={10}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {navigation.navigate('EditBoothScreen')}} style={[styles.itemContainer, { backgroundColor: item.boxColor }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <BouncyCheckbox
            size={20}
            fillColor="black"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "black" }}
          />
        </TouchableOpacity>
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
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center', 
    textAlignVertical: 'center', 
    paddingVertical: 15

  },
  checkbox: {
    alignSelf: "center",
  },
});