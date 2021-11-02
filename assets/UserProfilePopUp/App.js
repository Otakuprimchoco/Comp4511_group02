import React from 'react';
import {
  View, TouchableOpacity, Text, Image 
} from 'react-native';
import UserList from '../Cards/UserList/UserList';
import Root from './Root';
import Popup from './Popup';

export default function App() {

  const list = [
    {
      name: 'Full Name',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      about: 'About section for interests etc',
      followed: true,
    },
    {
      name: 'Full Name',
      avatar_url: 'https://picsum.photos/id/237/200/300',
      about: 'About section for interests etc',
      followed: false,
    },
  ]

  return (
    <Root>
    <View>
      {list.map((l, i) => (
        <TouchableOpacity
          onPress={() =>
            Popup.show({
              type: 'UserProfilePopUp',
              title: l.name,
              avatar_url: l.avatar_url,
              textBody: l.about,
              friends: l.followed,
              callback: () => Popup.hide(),
            })
          }>
          <UserList i={i} name={l.name} avatar_url={l.avatar_url} followed={l.followed}/>
        </TouchableOpacity>
      ))
      }
    </View>
  </Root>
  );

}