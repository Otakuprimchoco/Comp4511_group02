import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function BoothsGrid() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [items, setItems] = React.useState([
    { name: 'Aurecon', boxColor: '#1abc9c' },
    { name: 'Telstra', boxColor: '#2ecc71' },
    { name: 'Optiver', boxColor: '#3498db' },
    { name: 'KPMG', boxColor: '#9b59b6' },
    { name: 'Accenture', boxColor: '#34495e' },
  ]);

  return (
    <FlatGrid
      itemDimension={100}
      data={items}
      style={styles.gridView}
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.boxColor }]}>
          <Text style={styles.itemName}>{item.name}</Text>
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
    fontSize: 15,
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