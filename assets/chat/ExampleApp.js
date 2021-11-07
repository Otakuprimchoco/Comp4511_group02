import React from 'react';
import {
  View,
} from 'react-native';
import ChatBubble from './ChatBubble';

export default function App() {

  const list = [
    {
      i: 0,
      message: 'Hi there',
      outgoing: true,
      timestamp: '12:07pm'
    },
    {
      i: 1,
      message: 'Hi there mate good to see you out and about.',
      outgoing: false,
      timestamp: '12:09pm'
    },
    {
      i: 2,
      message: 'How\'s it going?',
      outgoing: true,
      timestamp: '12:20pm'
    },
  ]

  return (
    <View style={{backgroundColor: "#fff", width: 375,}}>
      {
        list.map((l, i) => (
          <ChatBubble i={i} message={l.message} outgoing={l.outgoing} timestamp={l.timestamp}/>
        ))
      }
    </View>
  );

}