import React, { useState, setState } from "react";
import {
  Image, ScrollView, StyleSheet,
  Text, TouchableOpacity, View
} from "react-native";
import { Header, Icon } from 'react-native-elements';
import MainButton from "../buttons/MainButton";


export default function JoinEventPopup({nav, description, closePopupFn}) {

    const liveEvent = () => {
        nav.navigate('LiveEvent');
        closePopupFn();
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Members on Call</Text>
                <View style={styles.closeButton}>
                    <Icon name={'close'} color='black' size={30} onPress={closePopupFn}/>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>insert group members list</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>insert microphone and video buttons</Text>
            </View>
            <View style={{margin: 20}}>
                <TouchableOpacity style={styles.createBtn} onPress={() => {liveEvent()}}>
                    <Text style={styles.createText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 520,
        width: 325,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 150,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    headerContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 24,
        color: '#006666',
        fontWeight: 'bold'
    },
    descriptionContainer: {
        height: 200,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    descriptionText: {
        fontSize: 16
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 0
    },
    createBtn: {
      width: 160,
      height: 70,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#008080",
      padding: 20,
    },
    createText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
    },
})