import React from 'react';
import {
  View,
} from 'react-native';
import GroupCard from './GroupCard';

export default function App() {

  const list = [
    {
      name: 'Group Name',
      subtitleL: '# Members',
      subtitleR: 'Public'
    },
    {
      name: 'Group Name',
      subtitleL: '# Members',
      subtitleR: 'Private'
    },
  ]

  return (
    <View>
      {
        list.map((l, i) => (
          <GroupCard i={i} name={l.name} subtitleL={l.subtitleL} subtitleR={l.subtitleR}/>
        ))
      }
    </View>
  );

}