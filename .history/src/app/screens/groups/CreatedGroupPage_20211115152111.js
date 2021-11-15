import React, { useEffect, useState } from "react";
import {
  Image, ScrollView, StyleSheet,
  Text, TouchableOpacity, View, Modal
} from "react-native";
import { Header, Icon } from 'react-native-elements';
import EventCard from "../../assets/Cards/EventCard/EventCard";
import sampleUserPhoto from '../../assets/sampleUserData/sample_groupPageHeaderPhoto2.png';
import AboutGroupPopup from "../../assets/popups/AboutGroupPopup";
import SubButton from "../../assets/buttons/SubButton";
import data from '../../assets/sampleUserData/sample_groupPageData'
import { Row } from "react-bootstrap";



export default function CreatedGroupPage({navigation, groupId}) {
  const groupData = data[1]
  const [isFollowing, setIsFollowing] = useState(true);
  const [isOwner, setIsOwner] = useState(true);
  const [isAboutPopupVisible, setIsAboutPopupVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly

        containerStyle={{
          backgroundColor: '#66B2B2',
          justifyContent: 'space-around',
        }}
        leftComponent={{ icon: 'keyboard-arrow-left', color: '#008080', iconStyle: { color: '#fff' }, 
          onPress: () => {navigation.pop()} }}
        centerComponent={{ text: 'Groups', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
        rightComponent={{ icon: 'account-circle', type: 'material-community', color: '#fff'}}
      />
      <View style={styles.groupHeader}>
        <View>
          <Image source={sampleUserPhoto} style={styles.headerPhoto}/>
          <View style={styles.photoOverlay} />
        </View>

        <View style={styles.groupNameContainer}>
          <Text style={styles.groupName}>{groupData.groupName}</Text>
        </View>

        <View style={styles.headerIconContainer}>
          <Icon name='ios-share' color='white' size={30} style={styles.headerIcon}/>
          {
            isOwner ?
              <Icon name={'settings'} color='white' size={30} onPress={() => {navigation.push("GroupSettings")}}/>
              :
              <Icon name={'info'} color='white' size={30} onPress={() => {setIsAboutPopupVisible(true)}}/>
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
              setIsAboutPopupVisible(false);
            }}
          >
          <AboutGroupPopup description={groupData.description} closePopupFn={() => {setIsAboutPopupVisible(false)}}/>
          </Modal>
        }

        <View style={styles.followButtonContainer}>
          {
            isFollowing ?
            <SubButton text={"Unfollow Group"} color={styles.unfollowButton.backgroundColor} icon={'remove-circle'} 
              onPressFn={() => {setIsFollowing(false)}}/>
            :
            <SubButton text={"Follow Group"} color={styles.followButton.backgroundColor} icon={'add-circle'} 
              onPressFn={() => {setIsFollowing(true)}}/>
          }

        </View>
        <View style={styles.membersContainer}>
        <View style={{paddingBottom: 10, paddingLeft: 5, flexDirection: 'row', }}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Attendees</Text>
          </View>
          <View style={styles.inviteContainer}>

            <SubButton text={"Invite Members"} color={styles.followButton.backgroundColor} icon={'add-circle'} 
              onPressFn={() => {setisMembersPopup(true)}}/>

        </View>  

        </View>
        <View style={styles.spacer}/>
        <View style={styles.eventsContainer}>
            <View style={{flexDirection: "row"}}>
          <View style={{paddingBottom: 10, paddingLeft: 5}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Upcoming Events</Text>
          </View>
          <View style={styles.inviteContainer}>
            <SubButton text={"Invite Members"} color={styles.followButton.backgroundColor} icon={'add-circle'} 
            onPressFn={() => {setisMembersPopup(true)}}/>
          </View>
          </View>
          < ScrollView style={styles.eventsList}>
          {
            groupData.events.map((item, i) => (
              <EventCard 
                key={i} name={item.name} 
                subtitle={`In ${item.timeToEvent}`}
                onPressFn={() => {}}
                />
            ))
          }
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
    borderWidth: 2
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
    paddingBottom: 10
  },
  followButton: {
    backgroundColor: '#66B2B2',
  },
  unfollowButton: {
    backgroundColor: '#A6A6A6',
  },
  inviteContainer: {
        alignItems: 'flex-end',
        paddingHorizontal: 130,
        paddingBottom: 10, 
        marginLeft: -40
  }
});


  