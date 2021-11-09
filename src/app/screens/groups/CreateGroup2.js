import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  onBlur, SafeAreaView, ScrollView, Switch
} from "react-native";
import SwitchButton from 'switch-button-react-native'
import GroupCard from '../../assets/Cards/GroupCard/GroupCard'
import { ListItem, List, Icon, Header, Avatar } from 'react-native-elements'

import InterestList from "../../assets/SelectionList/InterestList";

export default function CreateGroup2({route, navigation}) {
  const { groupName } = route.params;
  return (
    <View style={styles.container}>
      <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly

          containerStyle={{
            backgroundColor: '#8fcbbc',
            justifyContent: 'space-around',
          }}
          leftComponent={{ icon: 'keyboard-arrow-left', color: 'darkcyan', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: groupName, style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
          rightComponent={{ icon: 'account-circle', type: 'material-community', color: '#fff'}}
        />
      <ScrollView contentContainerStyle={{justifyContent: 'flex-start'}}>
        <InterestList></InterestList>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("Main")}>
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
  inputView: {
    // alignItems: "center",
    margin: 20,
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