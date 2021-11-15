import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal} from "react-native";
import { Header, Icon } from 'react-native-elements';
import sampleUserPhoto from '../../assets/sampleUserData/sample_groupPageHeaderPhoto2.png';
import AboutGroupPopup from "../../assets/popups/AboutGroupPopup";
import SubButton from "../../assets/buttons/SubButton";
import data from '../../assets/sampleUserData/Sample_Event_Data/sample_eventpage'
import BoothsGrid from "./BoothsGrid";
import MainButton from "../../assets/buttons/MainButton";
import JoinEventPopup from "../../assets/popups/JoinEventPopup";

export default function JoinEvent({navigation, EventId}) {
  const eventData = data[1]
  const [inviteMembers, setinviteMembers] = useState(false);
  const [isOwner, setIsOwner] = useState(true);
  const [isJoinEvent, setisJoinEvent] = useState(false);
  const [isMembersPopup, setisMembersPopup] = useState(false);

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(liked);
  }, [liked]);

  return (
    <View style={styles.container}>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content"

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
        {isJoinEvent &&
          <Modal
            animationType="slide"
            transparent={true}
            visible={isJoinEvent}
            onRequestClose={() => {
              setisJoinEvent(false);
            }}
          >
          <JoinEventPopup description={eventData.description} closePopupFn={() => {setisJoinEvent(false)}}/>
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

            <SubButton text={"Invite Members"} color={styles.followButton.backgroundColor} icon={'add-circle'} 
              />

        </View>  

        </View>
        <View style={styles.spacer}/>
        <View>
          <View style={{paddingBottom: 10, paddingLeft: 5}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Booths</Text>
          </View>
          <ScrollView style={styles.eventsList}>
            <View>
          <BoothsGrid/>
          </View>
          </ScrollView>
        </View>
        <View style={{marginLeft: "28%", marginTop: 10}}>
        <MainButton text={"  On Live!\nJoin it now"} onPressFn={() => {setisJoinEvent(true)}}/>
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
    paddingHorizontal: 130,
    paddingBottom: 10
  },
  followButton: {
    backgroundColor: '#66B2B2',
  },
});


  