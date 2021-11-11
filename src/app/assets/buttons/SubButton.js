import React from "react";
import {
  ScrollView, StyleSheet,
  Text, TouchableOpacity, View
} from "react-native";
import { Header, Icon } from 'react-native-elements';

export default function SubButton({text, onPressFn, icon, color}) {
  const styles = StyleSheet.create( {
    button: {
      width: 135,
      height: 30,
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5, 
      flexDirection: 'row'
    },
    buttonText: {
      fontSize: 13,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      color: 'white',
      paddingLeft: 2,
      paddingRight: 5,
      width: 100
    },
  });  
  
  return (
    <TouchableOpacity onPress={onPressFn}>
      <View style={styles.button} >
        <Text style={styles.buttonText}>{text}</Text>
        <Icon name={icon} color='white' size={20}/>
      </View>
    </TouchableOpacity>
  )
}

