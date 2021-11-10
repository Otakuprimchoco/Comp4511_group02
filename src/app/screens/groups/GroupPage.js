import React, { useEffect, useState } from "react";
import {
  Image, ScrollView, StyleSheet,
  Text, TouchableOpacity, View, Modal
} from "react-native";
import { Header, Icon } from 'react-native-elements';
import EventCard from "../../assets/Cards/EventCard/EventCard";
import sampleUserPhoto from '../../assets/sampleUserAssets/sample_groupPageHeaderPhoto2.png';
// import FollowGroupIcon from "../../assets/icons/followGroup.png"
// import UnfollowGroupIcon from "../../assets/icons/unfollowGroup.png"
// import { Svg } from 'react-native-svg'
import AboutGroupPopup from "../../assets/popups/AboutGroupPopup";


const data = {
  1: {
    'groupId': 1,
    'groupName': 'UNSW Engineering Society',
    'description': "Founded in 2011, the UNSW Engineering Society (EngSoc) is the leading engineering society officially endorsed by the UNSW Faculty of Engineering, as well as Arc (UNSW’s umbrella student organisation).",
    'numMembers': 1456,
    'isFollowing': true,
    'memberList': [
      'Dennis Miller',
      'Alton Salazar',
      'Steph Miller',
      'Tony Alvarez',
      'Rob Maxwell'
    ],
    'events': [
      {
        name: 'UNSW Engineering Career Fair',
        timeToEvent: '2 hours',
        isLiked: true
      },
      {
        name: 'Student Career Fair 2021',
        timeToEvent: '5 days',
        isLiked: false
      }
    ]
  }
}

export default function GroupPage({navigation, groupId}) {
  const groupData = data[1]
  const [isFollowing, setIsFollowing] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [isAboutPopupVisible, setIsAboutPopupVisible] = useState(false);

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
              <Icon name={'settings'} color='white' size={30}/>
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
            <TouchableOpacity onPress={() => setIsFollowing(false)}>
              <View style={styles.unfollowButton} >
                <Text style={styles.followButtonText}>{"Unfollow Group"}</Text>
                <Icon name={'remove-circle'} color='white' size={20} style={styles.followButtonIcon}/>
              </View>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => setIsFollowing(true)}>
              <View style={styles.followButton}>
                <Text style={styles.followButtonText}>{"Follow Group"}</Text>
                <Icon name={'add-circle'} color='white' size={20} style={styles.followButtonIcon}/>
              </View>
            </TouchableOpacity>
          }

        </View>
        <View style={styles.membersContainer}>
          <View style={{paddingBottom: 10, paddingLeft: 5, flexDirection: 'row', }}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Members</Text>
            <Text style={{fontSize: 14, color: 'grey'}}> ({groupData.numMembers})</Text>
          </View>

        </View>
        <View style={styles.spacer}/>
        <View style={styles.eventsContainer}>
          <View style={{paddingBottom: 10, paddingLeft: 5}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Upcoming Events</Text>
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
    // flex: 1,
    height: 100,
    width: undefined,
    paddingVertical: 10,
    paddingHorizontal: 10
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
    width: 135,
    height: 30,
    backgroundColor: '#66B2B2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5, 
    flexDirection: 'row'
  },
  unfollowButton: {
    width: 135,
    height: 30,
    backgroundColor: '#A6A6A6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5, 
    flexDirection: 'row'
  },
  followButtonText: {
    fontSize: 13,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 2,
    paddingRight: 5,
    width: 100
  },
  followButtonIcon: {
    // marginRight: 4,
  }

  });


  