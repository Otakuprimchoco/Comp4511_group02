import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from "react-native";
import { Header } from 'react-native-elements'
import InterestList from "../../../assets/SelectionList/InterestList";
import Header1 from "../../../assets/Header/Header1";
export default function AddEvent2({route, navigation}) {
  const { eventName } = route.params;
  return (
    <View style={styles.container}>
      <Header1 title='Add Events' nav={navigation}></Header1>
      <ScrollView contentContainerStyle={{justifyContent: 'flex-start'}}>
        <InterestList></InterestList>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("CreatedEvent")}>
            <Text style={styles.nextText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    padding: 10,
    alignSelf: 'center'
  },
  nextBtn: {
    width: 173,
    height: 52,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008080"
  },
  nextText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  });