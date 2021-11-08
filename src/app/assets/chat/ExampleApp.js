import React from 'react';
import {
  View,
} from 'react-native';
import ChatBubble from './ChatBubble';
import UserTyping from './UserTyping'

export default function App() {

  const list = [
    {
      key: 0,
      message: 'Hi there',
      outgoing: true,
      timestamp: '12:07pm'
    },
    {
      key: 1,
      message: 'Hi there, good to hear from you. How did you like the event?',
      outgoing: false,
      timestamp: '12:09pm'
    },
    {
      key: 2,
      message: 'The event was great. Which booth did you attend?',
      outgoing: true,
      timestamp: '12:20pm'
    },
  ]

  return (
    <View style={{backgroundColor: "#fff", width: 375,}}>
      {
        list.map((l) => (
          <ChatBubble message={l.message} outgoing={l.outgoing} timestamp={l.timestamp}/>
        ))
      }
      <UserTyping/>
    </View>
  );

}