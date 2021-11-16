import React, { useState, setState } from "react";
import {  View, Text, TouchableOpacity, StyleSheet, Image, Animated, Dimensions, Alert, ScrollView} from "react-native";
import { Header, Icon } from 'react-native-elements';

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height


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
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.createBtn} onPress={() => {liveEvent()}}>
                    <Text style={styles.createText}>Join Event</Text>
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
        color: 'black',
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
      width: 122,
      height: 52,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#008080",
    },
    createText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
    },
})