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
import SearchAndFilter from "../../assets/SearchAndFilter/SearchAndFilter";


const list = [
  {
    key: 0,
    name: 'UNSW Engineering Society',
    subtitleL: '1456 Members',
    subtitleR: 'Public'
  },
  {
    key: 1,
    name: 'Frontend Developers Club',
    subtitleL: '1100 Members',
    subtitleR: 'Private'
  },
  {
    key: 2,
    name: 'Robotics Club',
    subtitleL: '766 Members',
    subtitleR: 'Public'
  },
  {
    key: 3,
    name: 'Software Engineering Society',
    subtitleL: '1755 Members',
    subtitleR: 'Private'
  },
  {
    key: 4,
    name: 'International Business Group',
    subtitleL: '652 Members',
    subtitleR: 'Public'
  },
  {
    key: 5,
    name: 'Architecture Society',
    subtitleL: '900 Members',
    subtitleR: 'Private'
  },
  {
    key: 6,
    name: 'Law School Group',
    subtitleL: '898 Members',
    subtitleR: 'Public'
  },
]

export default function DiscoverGroups({navigation}) {
  return (
    <View style={styles.container}>
           
      <View style={styles.groupsContainer}>
        <SearchAndFilter/>
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
    flex: 1,
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  groupsList: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderWidth: 1,
    backgroundColor: '#F2F2F3'
  },
  image: {
    width: 30, 
    height: 30,
  },
  });