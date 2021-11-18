import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import EventCard from '../../assets/Cards/EventCard/EventCard';
import NotificationsHeader from '../../assets/Header/NotificationsHeader';
import { ListItem, Icon } from 'react-native-elements';

export default function Notifications({ navigation }) {
    const list = [
        {
          name: 'Event Name',
          subtitle: 'About',
          state: false,
        },
        {
          name: 'Event Name',
          subtitle: 'About',
          state: false,
        },
      ]
    
      return (
        <View>
            <NotificationsHeader nav={navigation} ></NotificationsHeader>
            <View>
            <ListItem bottomDivider button onPress={() => navigation.navigate("JoinEvent")}>
                <ListItem.Content>
                    <ListItem.Title style={styles.titleEventStartView}>Your event "UNSW Career Fair" is starting</ListItem.Title>
                </ListItem.Content>
                <View style={{justifyContent: 'center'}}>
                  <ListItem.Chevron color={"black"} size={26} iconStyle={styles.iconView}/>
                </View>
            </ListItem>

            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title style={styles.titleView}>You are now friends with "Sean Fox"</ListItem.Title>
                </ListItem.Content>
                <View style={{justifyContent: 'center'}}>
                  <ListItem.Chevron color={"black"} size={26} iconStyle={styles.iconView}/>
                </View>
              </ListItem>

            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title style={styles.titleView}>"Kevin Lane" requested to join "IOT Developers"</ListItem.Title>
                </ListItem.Content>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                  <TouchableOpacity  activeOpacity={0.5}>
                    <Icon name='check-circle' type='material' color={"#66B2B2"} size={33} style={{marginRight: 10}}/>
                  </TouchableOpacity>
                  <TouchableOpacity  activeOpacity={0.5}>
                    <Icon name='cancel' type='material' color={"#A6A6A6"} size={33} style={{marginLeft: 10}}/>
                  </TouchableOpacity>
                </View>
              </ListItem>
              <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title style={styles.titleView}>"Anika Days" wants to be your friend</ListItem.Title>
                </ListItem.Content>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                  <TouchableOpacity  activeOpacity={0.5}>
                    <Icon name='check-circle' type='material' color={"#66B2B2"} size={33} style={{marginRight: 10}}/>
                  </TouchableOpacity>
                  <TouchableOpacity  activeOpacity={0.5}>
                    <Icon name='cancel' type='material' color={"#A6A6A6"} size={33} style={{marginLeft: 10}}/>
                  </TouchableOpacity>
                </View>
              </ListItem>

            <ListItem bottomDivider button>
                <ListItem.Content>
                    <ListItem.Title style={styles.titleView}>"UNSW Engineering Society" listed a new event</ListItem.Title>
                </ListItem.Content>
                <View style={{justifyContent: 'center'}}>
                  <ListItem.Chevron color={"black"} size={26} iconStyle={styles.iconView}/>
                </View>
              </ListItem>
              <ListItem bottomDivider button>
                <ListItem.Content>
                    <ListItem.Title style={styles.titleView}>"Ben Higgins and two others" booked your event: "TechFest21"</ListItem.Title>
                </ListItem.Content>
                <View style={{justifyContent: 'center'}}>
                  <ListItem.Chevron color={"black"} size={26} iconStyle={styles.iconView}/>
                </View>
              </ListItem>
            </View>
        </View>
        
      );
}

const styles = StyleSheet.create({
  subtitleView: {
    fontSize: 10,
    paddingTop: 7, 
    color: "grey"
  },
  titleView: {
      fontSize: 16,
  },
  titleEventStartView: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold'
  },
  iconView: {
      paddingBottom: 2,
  },
});