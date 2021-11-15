import React from "react";
import {
  ScrollView, StyleSheet,
  Text, TouchableOpacity, View
} from "react-native";

export default function MainButton({text, onPressFn}) {
    return (
        <TouchableOpacity style={styles.createBtn} onPress={onPressFn}>
          <Text style={styles.createText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create( {
  createBtn: {
    width: 173,
    height: 52,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "import React from "react";
import {
  ScrollView, StyleSheet,
  Text, TouchableOpacity, View
} from "react-native";

export default function MainButton({text, onPressFn}) {
    return (
        <TouchableOpacity style={styles.createBtn} onPress={onPressFn}>
          <Text style={styles.createText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create( {
  createBtn: {
    width: 173,
    height: 52,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008080"
  },
  createText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});"
  },
  createText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});