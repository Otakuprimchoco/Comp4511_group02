import React, {useContext} from "react";
import {
  ScrollView, StyleSheet,
  Text, TouchableOpacity, View
} from "react-native";
import GroupCard from '../../assets/Cards/GroupCard/GroupCard';
import MainButton from "../../assets/buttons/MainButton";
import list from '../../assets/sampleUserData/sample_groupsData'
import { AuthContext } from "../../services/Context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Groups} from '../../model/groups'
import SearchAndFilter from "../../assets/SearchAndFilter/SearchAndFilter";


// AsyncStorage.clear();

export default function MyGroups({route, navigation}) {
  // Retrieve user details
  const {userToken} = route.params;
  const foundUser = Users.filter( item => {
    return userToken == item.userToken;
  })[0];

  
  
  const myGroups = Groups.filter(item => {
    return item.ownerId == foundUser.id
  })
  const followedGroups = Groups.filter(item => {
    return foundUser.followedGroups.includes(item.id) && item.ownerId != foundUser.id
  })

  return (
    <View style={styles.container}>
      <View style={styles.createGroupContainer}>
        <MainButton text={"Create Group"} onPressFn={() => navigation.push("CreateGroup1")}/>
      </View>
      
      <View style={styles.groupsContainer}>
        <SearchAndFilter/>
        < ScrollView style={styles.groupsList}>
        {
          myGroups.map((item, i) => (
            <GroupCard 
              key={i} name={item.name} 
              subtitleL={`${item.members.length} Members`} subtitleR={item.publicGroup ? "Public" : "Private"}
              onPressFn={() => {navigation.navigate("GroupPage", {isOwner: true})}}
              isOwner={true}
              />
          ))
        }
        {
          followedGroups.map((item, i) => (
              <GroupCard 
              key={i} name={item.name} 
              subtitleL={`${item.members.length} Members`} subtitleR={item.publicGroup ? "Public" : "Private"}
              onPressFn={() => {navigation.navigate("GroupPage", {isOwner: false, isFollowing: true})}}
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
    // paddingVertical: 10,
    paddingHorizontal: 10
  },
  groupsList: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderWidth: 1,
    backgroundColor: '#F2F2F3'
  },
  createGroupContainer: {
    paddingTop: 10,
    alignSelf: 'center'
  },
  image: {
    width: 30, 
    height: 30,
  },
  });

  