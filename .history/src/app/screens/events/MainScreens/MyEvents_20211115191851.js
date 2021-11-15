import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView} from "react-native";
import PastEventCard from "../../../assets/Cards/EventCard/PastEventCard";
import SearchAndFilter from "../../../assets/SearchAndFilter/SearchAndFilter";
import myEventsData from '../../../assets/sampleUserData/Sample_Event_Data/sample_myEvents_data'
import favEventsData from '../../../assets/sampleUserData/Sample_Event_Data/sample_favEvents_data'
import EventCard from "../../../assets/Cards/EventCard/EventCard";

export default function MyEvents({navigation}) {
  const Booked_Events = myEventsData[1]
  const Favorites = favEventsData[1]

  return (
    <View style={styles.container}>
        <View style={styles.eventsContainer}>
          <View style={{paddingBottom: 10, paddingLeft: 5}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>My Booked Events</Text>
            <SearchAndFilter/>
          </View>
          < ScrollView style={styles.eventsList}>
          {
            Booked_Events.my_events.map((item, i) => (
              <EventCard 
                key={i} name={item.name}
                subtitle={`${item.timeToEvent}`}
                onPressFn={() => {navigation.push("JoinEvent")}}                
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
  spacer:{
    paddingTop: 10
  }
  });