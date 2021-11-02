import React from 'react';
import {
  View,
} from 'react-native';
import UserList from './UserList';

export default function App() {

  const list = [
    {
      name: 'Name',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      followed: true,
    },
    {
      name: 'Name',
      avatar_url: 'https://picsum.photos/id/237/200/300',
      followed: false,
    },
  ]

  return (
    <View>
      {
        list.map((l, i) => (
          <UserList i={i} name={l.name} avatar_url={l.avatar_url} followed={l.followed}/>
        ))
      }
    </View>
  );

}