import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity} from "react-native";
import EventCard from "../../../assets/Cards/EventCard/EventCard";
import SearchAndFilter from "../../../assets/SearchAndFilter/SearchAndFilter";
import discoveryData from '../../../assets/sampleUserData/Sample_Event_Data/sample_discover_events_data';
import SubButton1 from "../../../assets/buttons/SubButton1";

export default function DiscoverEvents({navigation}) {
  const EventData = discoveryData[1]

  return (
    <View style={styles.container}>
        <View style={styles.eventsContainer}>
          <View style={styles.followButtonContainer}>
            <SubButton1 text={"Create Event"} color={styles.followButton.backgroundColor} icon={'add-circle'} onPressFn={() => {navigation.navigate("CreateGroup1")}} />
          </View>
          <View style={{paddingBottom: 5, paddingLeft: 5}}>
            <SearchAndFilter/>
          </View>
          < ScrollView style={styles.eventsList}>
          {
            EventData.popular_events.map((item, i) => (
              <EventCard 
                key={i} name={item.name}
                descSubtitle={item.description} 
                timeSubtitle={item.timeSubtitle} 
                onPressFn={() => navigation.push("EventSelected")}
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
  createGroupContainer: {
    paddingBottom: 10,
    alignSelf: 'center'
  },
  eventsContainer: {
    alignContent: 'center',
    borderRadius: 20,
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 10
  },
  eventsList: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderWidth: 1,
    backgroundColor: '#F2F2F3'
  },
  followButtonContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  followButton: {
    backgroundColor: '#66B2B2',
  },
  });