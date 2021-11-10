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
    name: 'Group Name',
    subtitleL: '# Members',
    subtitleR: 'Public'
  },
  {
    name: 'Group Name',
    subtitleL: '# Members',
    subtitleR: 'Private'
  },
  {
    name: 'Group Name',
    subtitleL: '# Members',
    subtitleR: 'Public'
  },
  {
    name: 'Group Name',
    subtitleL: '# Members',
    subtitleR: 'Private'
  },
  {
    name: 'Group Name',
    subtitleL: '# Members',
    subtitleR: 'Public'
  },
  {
    name: 'Group Name',
    subtitleL: '# Members',
    subtitleR: 'Private'
  },
  {
    name: 'Group Name',
    subtitleL: '# Members',
    subtitleR: 'Public'
  },
  {
    name: 'Group Name',
    subtitleL: '# Members',
    subtitleR: 'Private'
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
            <ListItem key={i} bottomDivider ViewComponent={TouchableOpacity}>
              <Image style={styles.image} source={profileIcon} />
              <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Subtitle  style={{fontSize: 12}}>{item.subtitleL}</ListItem.Subtitle>
              </ListItem.Content>
              <View style={{justifyContent: 'center'}}>
                <ListItem.Chevron style={{paddingBottom: 5}}/>
                <ListItem.Subtitle  style={{fontSize: 12}}>{item.subtitleR}</ListItem.Subtitle>
              </View>
            </ListItem>
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