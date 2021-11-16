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
import { ListItem, List, Icon } from 'react-native-elements'
import profileIcon from '../../assets/icons/profileicon.png'

const list = [
  {
    key: 0,
    name: 'UNSW Engineering Society',
    subtitleL: '(1456)',
    subtitleR: 'Public'
  },
  {
    key: 1,
    name: 'Frontend Developers Club',
    subtitleL: '(1100)',
    subtitleR: 'Private'
  },
  {
    key: 2,
    name: 'Robotics Club',
    subtitleL: '(766)',
    subtitleR: 'Public'
  },
  {
    key: 3,
    name: 'Software Engineering Society',
    subtitleL: '(1755)',
    subtitleR: 'Private'
  },
  {
    key: 4,
    name: 'International Business Group',
    subtitleL: '(652)',
    subtitleR: 'Public'
  },
  {
    key: 5,
    name: 'Architecture Society',
    subtitleL: '(900)',
    subtitleR: 'Private'
  },
  {
    key: 6,
    name: 'Law School Group',
    subtitleL: '(898)',
    subtitleR: 'Public'
  },
]

export default function DiscoverGroups({navigation}) {
  return (
    <View style={styles.container}>
           
      <View style={styles.groupsContainer}>
        <View style={{paddingBottom: 10, paddingLeft: 5}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>New Groups for You</Text>
        </View>
        < ScrollView style={styles.groupsList}>
        {
          list.map((item, i) => (
            <GroupCard 
              key={i} name={item.name} 
              subtitleL={item.subtitleL} subtitleR={item.subtitleR}
              onPressFn={() => {navigation.push("GroupPage", {isOwner: false})}}
              isOwner={false}
              />
          ))
        }
        </ScrollView>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  groupsContainer: {
    alignContent: 'center',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  groupsList: {
    borderRadius: 20,
    borderWidth: 2
  },
  createGroupContainer: {
    paddingBottom: 10,
    alignSelf: 'center'
  },
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
  image: {
    width: 30, 
    height: 30,
  },
  });