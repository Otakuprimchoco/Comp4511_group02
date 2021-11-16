import React from "react";
import {
  ScrollView, StyleSheet,
  Text, TouchableOpacity, View
} from "react-native";

export default function LiveEventButton({text, onPressFn}) {
    return (
        <TouchableOpacity style={styles.createBtn} onPress={onPressFn}>
          <Text style={styles.createText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create( {
  createBtn: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FC5353",
    borderWidth: 1,
    borderColor: 'white',
    height: 26,
    width: 50,
    marginLeft: 13,
  },
  createText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});