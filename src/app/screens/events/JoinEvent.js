import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal} from "react-native";
import { Header, Icon } from 'react-native-elements';
import sampleUserPhoto from '../../assets/sampleUserData/sample_groupPageHeaderPhoto2.png';
import SubButton from "../../assets/buttons/SubButton";
import data from '../../assets/sampleUserData/Sample_Event_Data/sample_eventpage'
import BoothsGrid from "./BoothsGrid";
import MainButton from "../../assets/buttons/MainButton";
import JoinPopup from "../../assets/popups/JoinEvent/JoinEventPopup";
import InviteMembers from "../../assets/popups/InviteMembersPopup";
import LiveEventButton from "../../assets/buttons/LiveEventButton";
import Root from "../../assets/popups/JoinEvent/Root";
import MemberList from '../../assets/memberList/MemberList'
import Header1 from '../../assets/Header/Header1'

export default function JoinEvent({navigation, EventId}) {
  const eventData = data[1]
  const [inviteMembers, setinviteMembers] = useState(false);
  const [isOwner, setIsOwner] = useState(true);
  const [isJoinEvent, setisJoinEvent] = useState(false);
  const [isMembersPopup, setisMembersPopup] = useState(false);
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
      name: 'Arya Triv',
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
  
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(liked);
  }, [liked]);

  return (
    <Root>
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
                <Icon name={'ios-share'} color='white' size={30} style={{paddingBottom: 10, marginTop: -3}} onPress={() => {navigation.push("GroupSettings")}}/>
                :
                <Icon name={'info'} color='white' size={30} onPress={() => {setisJoinEvent(true)}}/>
            }
            {liked ? (
                <TouchableOpacity  activeOpacity={0.5} onPress={() => (setLiked(false))}>
                  <Icon name='heart' type='font-awesome' color='#F97171'/>
              </TouchableOpacity>
              ) : (
                <TouchableOpacity  activeOpacity={0.5} onPress={() => setLiked(true)}>
              <Icon name='heart-o' type='font-awesome' color='white'/>
              </TouchableOpacity>
              )}
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
          <ScrollView>
          <View style={{marginLeft: "28%", marginTop: 10}}>
            <LiveEventButton text={"On Live!\nJoin it now"} onPressFn={() =>
              JoinPopup.show({
                type: 'UserProfilePopUp',
                title: "user",
                nav: navigation,
                textBody: "user",
                friends: true,
                callback: () => JoinPopup.hide(),
              })
            }
            //onPressFn={() => {setisJoinEvent(true)}}
            />
          </View>

          <View style={{paddingBottom: 10}}>
              <View style={{padding: 10}}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>Description: </Text>
                <Text style={{fontSize: 14, fontWeight: "normal", marginTop: 2}}>{eventData.description}</Text>
              </View>
              <View style={{padding: 10}}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>Time:
                <Text style={{fontSize: 14, fontWeight: "normal", marginTop: 2}}>  {eventData.time}</Text></Text>
              </View>
              <View style={{padding: 10}}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>Capacity:
                <Text style={{fontSize: 14, fontWeight: "normal", marginTop: 2}}>  {eventData.capacity}</Text></Text>
              </View>
            </View>

            <View style={styles.membersContainer}>
              <View style={styles.subContainerHeaderRow}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: -10}}>Attendees</Text>
                  <Text style={{fontSize: 18, color: 'grey', marginTop: -10}}> ({eventData.numMembers})</Text>
                </View>
                <View style={styles.followButtonContainer}>
                  <SubButton text={"Invite"} color={styles.followButton.backgroundColor} icon={'add-circle'} onPressFn={() => {navigation.navigate('MemberList', {members: list})}}/>
                </View>  
              </View>
              <MemberList navigation={navigation} members={list2}/>
            </View>

          {/* </View> */}
          <View style={styles.spacer}/>
            <View>
              <View style={{paddingBottom: 10, paddingLeft: 5}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10}}>Booths</Text>
              </View>
              <ScrollView style={styles.eventsList}>
                <View>
                  <BoothsGrid/>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    </Root>
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
    height: 120,
    width: undefined,
    paddingVertical: 20,
    paddingHorizontal: 10, 
    marginTop: 10

  },
  spacer: {
    height: 10,
    width: undefined
  },
  eventsList: {
    borderRadius: 20,
    borderWidth: 2, 
    marginTop: 10
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
    fontFamily:  'Roboto',
    color: 'white',
    textShadowColor: 'black',//'#006666',
    textShadowRadius: 10
  },
  headerIcon: {
    paddingBottom: 5,
  },
  followButtonContainer: {
    alignItems: 'flex-end',
    marginTop: -25
  },
  followButton: {
    backgroundColor: '#66B2B2',
  },
  eventsList: {
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: 'lightgrey',
    borderWidth: 1,
    backgroundColor: '#F2F2F3'

  },
});


  