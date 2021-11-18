import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import BoothPopup from '../../assets/popups/BoothInfo/BoothPopup';
export default function BoothsGrid() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [items, setItems] = React.useState([
    { name: 'Aurecon', description: "Welcome to a world dedicated to life at Telstra. Take a look around and uncover what it’s like to be part of a global telecommunications and technology business. We're committed to attracting the best talent, and that means embracing individual differences and nurturing an inclusive culture. Uncover the myriad of career pathways open to you. Learn more about the people behind the brand and follow our global footprint around the world. And, when you’re ready to take the first or next step in your career, find your dream job and together, we'll reimagine the future.",boxColor: '#1abc9c' },
    { name: 'Telstra', description: "Welcome to a world dedicated to life at Telstra. Take a look around and uncover what it’s like to be part of a global telecommunications and technology business. We're committed to attracting the best talent, and that means embracing individual differences and nurturing an inclusive culture. Uncover the myriad of career pathways open to you. Learn more about the people behind the brand and follow our global footprint around the world. And, when you’re ready to take the first or next step in your career, find your dream job and together, we'll reimagine the future.", boxColor: '#2ecc71' },
    { name: 'Optiver', description: "Welcome to a world dedicated to life at Telstra. Take a look around and uncover what it’s like to be part of a global telecommunications and technology business. We're committed to attracting the best talent, and that means embracing individual differences and nurturing an inclusive culture. Uncover the myriad of career pathways open to you. Learn more about the people behind the brand and follow our global footprint around the world. And, when you’re ready to take the first or next step in your career, find your dream job and together, we'll reimagine the future.", boxColor: '#3498db' },
    { name: 'KPMG', description: "Welcome to a world dedicated to life at Telstra. Take a look around and uncover what it’s like to be part of a global telecommunications and technology business. We're committed to attracting the best talent, and that means embracing individual differences and nurturing an inclusive culture. Uncover the myriad of career pathways open to you. Learn more about the people behind the brand and follow our global footprint around the world. And, when you’re ready to take the first or next step in your career, find your dream job and together, we'll reimagine the future.", boxColor: '#9b59b6' },
    { name: 'Accenture', description: "Welcome to a world dedicated to life at Telstra. Take a look around and uncover what it’s like to be part of a global telecommunications and technology business. We're committed to attracting the best talent, and that means embracing individual differences and nurturing an inclusive culture. Uncover the myriad of career pathways open to you. Learn more about the people behind the brand and follow our global footprint around the world. And, when you’re ready to take the first or next step in your career, find your dream job and together, we'll reimagine the future.", boxColor: '#34495e' },
  ]);

  return (
    <FlatGrid
      itemDimension={100}
      data={items}
      style={styles.gridView}
      spacing={10}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => 
          BoothPopup.show({
            type: 'UserProfilePopUp',
            title: item.name,
            textBody: item.description,
            friends: true,
            callback: () => BoothPopup.hide(),
          })}>
          <View style={[styles.itemContainer, { backgroundColor: item.boxColor }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <BouncyCheckbox
              size={20}
              fillColor="black"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "black" }}
            />
          </View>
        </TouchableOpacity>
      )}/>
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