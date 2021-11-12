import React from "react";
import {
  ScrollView, StyleSheet,
  Text, TouchableOpacity, View
} from "react-native";
import GroupCard from '../../assets/Cards/GroupCard/GroupCard';
import MainButton from "../../assets/buttons/MainButton";
import list from '../../assets/sampleUserData/sample_groupsData'


export default function MyGroups({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.createGroupContainer}>
        <MainButton text={"Create Group"} onPressFn={() => navigation.push("CreateGroup1")}/>
      </View>
      
      <View style={styles.groupsContainer}>
        <View style={{paddingBottom: 10, paddingLeft: 5}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>My Groups</Text>
        </View>
        < ScrollView style={styles.groupsList}>
        {
          list.map((item, i) => (
            <GroupCard 
              key={i} name={item.name} 
              subtitleL={item.subtitleL} subtitleR={item.subtitleR}
              onPressFn={() => {navigation.navigate("GroupPage")}}
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
  image: {
    width: 30, 
    height: 30,
  },
  });

  