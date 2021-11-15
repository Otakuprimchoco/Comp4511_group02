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
import NotificationsHeader from '../../assets/Header/NotificationsHeader'

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
                {
                    list.map((l, i) => (
                    <EventCard i={i} name={l.name} subtitle={l.subtitle} state={l.state}/>
                    ))
                }
                </View>
        </View>
        
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 200, 
    height: 200,
  },

  inputView: {
    alignItems: "flex-start",
    margin: 20,
  },

  TextInput: {
    height: 50,
    paddingLeft: 20,
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
  },
  TextInput1: {
    height: 50,
    paddingLeft: 20,
    width: "85%",
    borderRadius: 10,
  },
  inputBorder: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 10, flexDirection: 'row'
  },

  forgot_button: {
    fontWeight: 'bold',
    color: '#66B2B2',
    fontSize: 15,
  },

  loginBtn: {
    width: 94,
    height: 52,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    backgroundColor: "#008080",
  },

  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});