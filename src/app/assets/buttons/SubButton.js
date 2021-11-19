import React from "react";
import {
  ScrollView, StyleSheet,
  Text, TouchableOpacity, View
} from "react-native";
import { Header, Icon } from 'react-native-elements';

export default function SubButton({text, onPressFn, icon, color}) {
  const styles = StyleSheet.create( {
    button: {
      width: 105,
      height: 35,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5, 
      flexDirection: 'row'
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      color: 'white',
      // paddingHorizontal: 10,
      // paddingRight: 5,
      // width: 100,
      alignSelf: 'center'
    },
    buttonContainer: {
      // paddingHorizontal: 5,
      flex: 1
    },
    iconContainer: {
      paddingHorizontal: 5
    },
    button2: {
      width: 120,
      height: 35,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5, 
      flexDirection: 'row'
    },
  });  
  
  return (
    <TouchableOpacity onPress={onPressFn}>
      <View style={text != "Unfollow" ? styles.button : styles.button2} >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name={icon} color='white' size={25}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

