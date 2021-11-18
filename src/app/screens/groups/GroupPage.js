import React, { useEffect, useState } from "react";
import {
  Image, ScrollView, StyleSheet,
  Text, TouchableOpacity, View, Modal
} from "react-native";
import { Avatar, Header, Icon } from 'react-native-elements';
import EventCard from "../../assets/Cards/EventCard/EventCard";
import sampleUserPhoto from '../../assets/sampleUserData/sample_groupPageHeaderPhoto2.png';
import AboutGroupPopup from "../../assets/popups/AboutGroup/AboutGroupPopup";
import SubButton from "../../assets/buttons/SubButton";
import data from '../../assets/sampleUserData/sample_groupPageData'
import pending from '../../assets/icons/pending.png';
import MemberList from '../../assets/memberList/MemberList'
import Header1 from "../../assets/Header/Header1";
import data2 from '../../assets/sampleUserData/Sample_Event_Data/sample_eventpage';
import InviteMembers from "../../assets/popups/InviteMembersPopup";
import Root from "../../assets/popups/AboutGroup/Root";
const list = [
  {
    key: 1,
    name: 'Jack Poll',
    avatar_url: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    key: 2,
    name: 'Scott Allen',
    avatar_url: 'https://picsum.photos/id/237/200/300',
  },
  {
    key: 3,
    name: 'Al Pear',
    avatar_url: 'https://picsum.photos/seed/picsum/200/300'
  },
  {
    key: 4,
    name: 'Tony Angus',
    avatar_url: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    key: 5,
    name: 'Amy Top',
    avatar_url: 'https://picsum.photos/seed/picsum/200/300',
  },
]

export default function GroupPage ( { route, navigation } ) {
  const groupData = data[1]
  const eventData = data2[1]
  const [isFollowing, setIsFollowing] = useState(route.params.isFollowing);
  const [isOwner, setIsOwner] = useState(route.params.isOwner);
  // const [isOwner, setIsOwner] = useState(false);
  // setIsOwner(route.params.isOwner)
  const [isAboutPopupVisible, setIsAboutPopupVisible] = useState( false );
  const [isMembersPopup, setisMembersPopup] = useState( false );

  return (
    <Root>
    <View style={styles.container}>
      <Header1 title='Groups' nav={navigation}></Header1>
      <View style={styles.groupHeader}>
        <View>
          <Image source={sampleUserPhoto} style={styles.headerPhoto} />
          <View style={styles.photoOverlay} />
        </View>

        <View style={styles.groupNameContainer}>
          <Text style={styles.groupName}>{groupData.groupName}</Text>
        </View>

        <View style={styles.headerIconContainer}>
          <Icon name='ios-share' color='white' size={30} style={styles.headerIcon} />
          {
            isOwner ?
              <Icon name={'settings'} color='white' size={30} onPress={() => { navigation.push( "GroupSettings" ) }} />
              :
              <Icon name={'info'} color='white' size={30} onPress={() => 
                AboutGroupPopup.show({
                  type: 'UserProfilePopUp',
                  title: "user",
                  nav: navigation,
                  textBody: groupData.description,
                  friends: true,
                  callback: () => AboutGroupPopup.hide(),
                })
              }/>
          }
        </View>
      </View>

      <View style={styles.contentContainer}>
        {isAboutPopupVisible &&
          <Modal
            animationType="slide"
            transparent={true}
            visible={isAboutPopupVisible}
            onRequestClose={() => {
              setIsAboutPopupVisible( false );
            }}
          >
            <AboutGroupPopup description={groupData.description} closePopupFn={() => { setIsAboutPopupVisible( false ) }} />
          </Modal>
        }
        {isMembersPopup &&
          <Modal
            animationType="slide"
            transparent={true}
            visible={isMembersPopup}
            onRequestClose={() => {
              setisMembersPopup( false );
            }}
          >
            <InviteMembers description={eventData.description} closePopupFn={() => { setisMembersPopup( false ) }} />
          </Modal>
        }

        {!isOwner &&
          <View style={styles.followButtonContainer}>
            {
              isFollowing ?
                <SubButton text={"Unfollow"} color={styles.unfollowButton.backgroundColor} icon={'remove-circle'}
                  onPressFn={() => { setIsFollowing( false ) }} />
                :
                <SubButton text={"Follow"} color={styles.followButton.backgroundColor} icon={'add-circle'}
                  onPressFn={() => { setIsFollowing( true ) }} />
            }

          </View>}
        <View style={styles.membersContainer}>
          <View style={styles.subContainerHeaderRow}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Members</Text>
              <Text style={{ fontSize: 18, color: 'grey' }}> ({groupData.numMembers})</Text>
            </View>
            <View style={styles.inviteContainer}>
              <SubButton text={"Invite"} color={styles.followButton.backgroundColor} icon={'add-circle'}
                onPressFn={() => { setisMembersPopup( true ) }} />
            </View>
          </View>
          <MemberList navigation={navigation} members={list} />
        </View>

        <View style={styles.spacer} />

        <View style={styles.eventsContainer}>
          <View style={styles.subContainerHeaderRow}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Upcoming Events</Text>
            <View style={styles.createEventContainer}>
            {isOwner &&
              <SubButton text={"Create"} color={styles.followButton.backgroundColor} icon={'add-circle'}
                onPressFn={() => { navigation.push( "AddEvent" ) }} />
            }
            </View>
          </View>
          < ScrollView style={styles.eventsList}>
            {
              groupData.events.map( ( item, i ) => (
                <EventCard
                  key={i} name={item.name}
                  descSubtitle={item.description} 
                  timeSubtitle={item.timeSubtitle} 
                  subtitle={`In ${ item.timeToEvent }`}
                  onPressFn={() => {navigation.push("EventSelected") }}
                />
              ) )
            }
          </ScrollView>
        </View>
      </View>
    </View>
    </Root>
  );
}


const styles = StyleSheet.create( {
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
    // flex: 1,
    height: 140,
    width: undefined,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  subContainerHeaderRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    // paddingBottom: 10
  },
  inviteContainer: {
    marginRight: 5,
    // paddingBottom: 10,
  },
  createEventContainer: {
    marginRight: 5,
    // paddingBottom: 10,
  },
  spacer: {
    height: 10,
    width: undefined
  },
  eventsContainer: {
    alignContent: 'center',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  eventsList: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderWidth: 1,
    backgroundColor: '#F2F2F3',
    marginTop: 10
  },
  groupHeader: {
    width: 500,
    height: 75,
  },
  photoOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 75,
    width: 500,
    backgroundColor: 'rgba(84, 84, 88, 0.45)',
  },
  headerPhoto: {
    height: 75,
    resizeMode: 'cover',
  },
  headerIconContainer: {
    position: 'absolute',
    left: 355,
    top: 5,
  },
  groupNameContainer: {
    position: 'absolute',
    left: 10,
    top: 35,
  },
  groupName: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white',
    textShadowColor: 'black',//'#006666',
    textShadowRadius: 10
  },
  headerIcon: {
    paddingBottom: 5,
  },
  followButtonContainer: {
    alignItems: 'center',
    paddingBottom: 10
  },
  followButton: {
    backgroundColor: '#66B2B2',
  },
  unfollowButton: {
    backgroundColor: '#A6A6A6',
  },
} );
