import React, { useEffect, useState } from "react";
import {ActionSheetIOS, Image, ScrollView, StyleSheet, Text, View, Modal} from "react-native";
import { Header, Icon } from 'react-native-elements';
import sampleUserPhoto from '../../../assets/sampleUserData/sample_groupPageHeaderPhoto2.png';
import SubButton from "../../../assets/buttons/SubButton";
import data from '../../../assets/sampleUserData/Sample_Event_Data/sample_createdEventData'
import BoothsGridSample from "../../../assets/sampleUserData/Sample_Event_Data/sample_booth_data";
import BoothGridAddBooth from "../MainScreens/BoothGridAddBooth";
import MainButton from "../../../assets/buttons/MainButton";
import profileIcon from  '../../../assets/icons/profileicon.png'
import InviteMembers from "../../../assets/popups/InviteMembersPopup";
import AddBoothPopup from "../../../assets/popups/AddBoothPopup";
import Header1 from "../../../assets/Header/Header1";

export default function BoothAddedCreatedEvent({navigation}) {
  const eventData = data[1]
  const [isOwner, setIsOwner] = useState(true);
  // const [isAboutPopupVisible, setIsAboutPopupVisible] = useState(false);
  const [isMembersPopup, setisMembersPopup] = useState(false);
  const [isAddBoothPopup, setIsAddBoothPopup] = useState(false);

  const [liked, setLiked] = useState(false);

  const list = [
    {
      key: 1,
      name: 'Jack Poll',
      about: 'About section for interests etc',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      followed: true,
    },
    {
      key: 2,
      name: 'Sean Fox',
      avatar_url: 'https://picsum.photos/id/237/200/300',
      about: 'About section for interests etc',
      followed: true,
    },
    {
      key: 3,
      name: 'Al Pear',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      about: 'About section for interests etc',
      followed: true,
    },
    {
      key: 4,
      name: 'Tony Angus',
      about: 'About section for interests etc',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      followed: true,
    },
    {
      key: 5,
      name: 'Amy Top',
      about: 'About section for interests etc',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      followed: true,
    },
  ]

  const list2 = [
    {
      key: 1,
      name: 'Jack Poll',
      about: 'About section for interests etc',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      followed: true,
    },
    {
      key: 2,
      name: 'Sean Fox',
      avatar_url: 'https://picsum.photos/id/237/200/300',
      about: 'About section for interests etc',
      followed: false,
    },
    {
      key: 3,
      name: 'Cart Chen',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      about: 'About section for interests etc',
      followed: false,
    },
    {
      key: 4,
      name: 'Came Hors',
      about: 'About section for interests etc',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      followed: false,
    },
    {
      key: 5,
      name: 'Man Mon',
      about: 'About section for interests etc',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      followed: false,
    },
  ]


  const onPress = () =>
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        // url: './assets/logos/logo2.png',
        subject: eventData.eventName,
        message: eventData.eventName,
        excludedActivityTypes: [
          'com.apple.UIKit.activity.PostToTwitter'
        ]
      },
      (error) => alert(error),
      (completed, method) => {
        var text;
        if (completed) {
          text = `Shared via ${method}`;
        } else {
          text = 'You didn\'t share';
        }
      }
    );

  
  useEffect(() => {
    setLiked(liked);
  }, [liked]);

  return (
    <View style={styles.container}>
      <Header1 title='Events' nav={navigation}></Header1>

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
              <Icon name={'ios-share'} color='white' size={30} style={{paddingBottom: 10, marginTop: -3}} onPress={onPress}/>
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
      {isMembersPopup &&
          <Modal
            animationType="slide"
            transparent={true}
            visible={isMembersPopup}
            onRequestClose={() => {
              setisMembersPopup(false);
            }}
          >
          <InviteMembers description={eventData.description} closePopupFn={() => {setisMembersPopup(false)}}/>
          </Modal>
        }    
          {isAddBoothPopup &&
          <Modal
            animationType="slide"
            transparent={true}
            visible={isAddBoothPopup}
            onRequestClose={() => {
              setIsAddBoothPopup(false);
            }}
          >
          <AddBoothPopup description={eventData.description} closePopupFn={() => {setIsAddBoothPopup(false)}}/>
          </Modal>
        }    
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
          </View>
          <View style={styles.followButtonContainer}>

            <SubButton text={"Invite"} color={styles.followButton.backgroundColor} icon={'add-circle'} 
              onPressFn={() => {navigation.navigate('MemberList', {members: list})}}/>
        </View>  
        </View>
        <View style={styles.spacer}/>
        <View>
          <View style={{paddingBottom: 10, paddingLeft: 5}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Booths</Text>
          </View>
          < ScrollView style={styles.eventsList}>
            <View>
          <BoothGridAddBooth/>
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
    borderColor: 'lightgrey',
    borderWidth: 1,
    backgroundColor: '#F2F2F3',
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
  eventsList: {
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: 'lightgrey',
    borderWidth: 1,
    backgroundColor: '#F2F2F3'

  },
});


  