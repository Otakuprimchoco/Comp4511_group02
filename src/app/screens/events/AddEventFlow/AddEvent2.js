import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from "react-native";
import { Header } from 'react-native-elements'
import InterestList from "../../../assets/SelectionList/InterestList";

export default function AddEvent2({route, navigation}) {
  const { eventName } = route.params;
  return (
    <View style={styles.container}>
      <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"

          containerStyle={{
            backgroundColor: '#8fcbbc',
            justifyContent: 'space-around',
          }}
          leftComponent={{ icon: 'keyboard-arrow-left', color: 'darkcyan', iconStyle: { color: '#fff' }, 
            onPress: () => {navigation.pop()} }}
          centerComponent={{ text: eventName, style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
          rightComponent={{ icon: 'account-circle', type: 'material-community', color: '#fff'}}
        />
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
    alignItems: "center",
    justifyContent: "center",
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