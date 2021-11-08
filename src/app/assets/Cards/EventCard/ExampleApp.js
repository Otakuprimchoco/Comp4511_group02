import React from 'react';
import {
  View,
} from 'react-native';
import EventCard from './EventCard';

export default function App() {

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
      {
        list.map((l, i) => (
          <EventCard i={i} name={l.name} subtitle={l.subtitle} state={l.state}/>
        ))
      }
    </View>
  );

}