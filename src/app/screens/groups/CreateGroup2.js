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
import Header1 from "../../assets/Header/Header1";

import InterestList from "../../assets/SelectionList/InterestList";

export default function CreateGroup2({route, navigation}) {
  const { groupName } = route.params;
  return (
    <View style={styles.container}>
      <Header1 title="New Group" nav={navigation}/>
      <ScrollView contentContainerStyle={{justifyContent: 'flex-start'}}>
        <InterestList></InterestList>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("GroupPage", {isOwner:  true})}>
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