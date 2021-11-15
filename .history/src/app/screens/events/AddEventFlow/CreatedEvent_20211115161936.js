import React, { useEffect, useState } from "react";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import { Header, Icon } from 'react-native-elements';
import sampleUserPhoto from '../../../assets/sampleUserData/sample_groupPageHeaderPhoto2.png';
import SubButton from "../../../assets/buttons/SubButton";
import data from '../../../assets/sampleUserData/Sample_Event_Data/sample_createdEventData'
import BoothsGridSample from "../../../assets/sampleUserData/Sample_Event_Data/sample_booth_data";
import MainButton from "../../../assets/buttons/MainButton";
import profileIcon from  '../../../assets/icons/profileicon.png'

export default function CreatedEvent({navigation}) {
  const eventData = data[1]
  const [isOwner, setIsOwner] = useState(true);
  // const [isAboutPopupVisible, setIsAboutPopupVisible] = useState(false);

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(liked);
  }, [liked]);

  return (
    <View style={styles.container}>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly

        containerStyle={{
          backgroundColor: '#8fcbbc',
          justifyContent: 'space-around',
        }}
        leftComponent={{ icon: 'keyboard-arrow-left', color: 'darkcyan', iconStyle: { color: '#fff' }, 
          onPress: () => {navigation.pop()} }}
        centerComponent={{ text: 'Event', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
        rightComponent={{ icon: 'account-circle', type: 'material-community', color: '#fff'}}
      />
      <View style={styles.eventHeader}>
        <View>
          <Image source={sampleUserPhoto} style={styles.headerPhoto}/>
          <View style={styles.photoOverlay} />
        </View>

        <View style={styles.eventNameConatiner}>
          <Text style={styles.eventName}>{eventData.eventName}</Text>
        </View>

        <View style={styles.headerIconContainer}>
          {
            isOwner ?
              <Icon name={'ios-share'} color='white' size={30} style={{paddingBottom: 10, marginTop: -3}} onPress={() => {navigation.push("")}}/>
              :
              <Icon name={'info'} color='white' size={30} onPress={() => {setIsAboutPopupVisible(true)}}/>
          }
          {
            isOwner ?
              <Icon name={'settings'} color='white' size={30} onPress={() => {navigation.push("EventSettings")}}/>
              :
              <Icon name={'info'} color='white' size={30} onPress={() => {setIsAboutPopupVisible(true)}}/>
          }
        </View>
      </View>

      <View style={styles.contentContainer}>        
        <View style={{padding: 10}}>
          <Text style={{fontWeight: "bold"}}>Description: </Text>
          <Text style={{fontSize: 10, fontWeight: "normal", marginTop: 2}}>{eventData.description}</Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontWeight: "bold"}}>Time:
          <Text style={{fontSize: 12, fontWeight: "normal", marginTop: 2}}>  {eventData.time}</Text></Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontWeight: "bold"}}>Capacity:
          <Text style={{fontSize: 12, fontWeight: "normal", marginTop: 2}}>  {eventData.capacity}</Text></Text>
        </View>

        <View style={styles.membersContainer}>
          
          <View style={{paddingBottom: 10, paddingLeft: 5, flexDirection: 'row', }}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Attendees</Text>
          </View>                              <Image style={styles.image} source={profileIcon} />
                              <Image style={styles.image} source={profileIcon} />
                              <Image style={styles.image} source={profileIcon} />
                              <Image style={styles.image} source={profileIcon} />
          <View style={styles.followButtonContainer}>

            <SubButton text={"Invite Members"} color={styles.followButton.backgroundColor} icon={'add-circle'} 
              onPressFn={() => {setinviteMembers(true)}}/>
        </View>  
        </View>
        <View style={styles.spacer}/>
        <View>
          <View style={{paddingBottom: 10, paddingLeft: 5}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Booths</Text>
          </View>
          < ScrollView style={styles.eventsList}>
            <View>
          <BoothsGridSample/>
          </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  membersContainer: {
    alignContent: 'center',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    height: 100,
    width: undefined,
    paddingVertical: 10,
    paddingHorizontal: 10, 
    flexDirection:'row',

  },
  spacer: {
    height: 10,
    width: undefined
  },
  eventsList: {
    borderRadius: 20,
    borderWidth: 2
  },
  eventHeader: {
    width: 500,
    height: 90,
  },
  photoOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 90,
    width: 500,
    backgroundColor: 'rgba(84, 84, 88, 0.45)',
  },
  headerPhoto: {
    height: 90,
    resizeMode: 'cover',
  },
  headerIconContainer: {
    position: 'absolute',
    left: 355,
    top: 15,
  },
  eventNameConatiner: {
    position: 'absolute',
    left: 10,
    top: 50,
  },
  eventName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 10
  },
  headerIcon: {
    paddingBottom: 5,
  },
  followButtonContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 130,
    paddingBottom: 10
  },
  followButton: {
    backgroundColor: '#66B2B2',
  },
  image: {
    width: 30, 
    height: 30,
  },
});


  