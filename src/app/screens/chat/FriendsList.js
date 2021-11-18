import React from 'react';
import {
  View, TouchableOpacity, Text, Image 
} from 'react-native';
import UserList from '../../assets/Cards/UserList/UserList';
import Root from '../../assets/UserProfilePopUp/Root';
import Popup from '../../assets/UserProfilePopUp/Popup';
import Header1 from '../../assets/Header/Header1';

export default function FriendsList({navigation}) {

  const list = [
    {
      name: 'Sean Fox',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      about: 'Interested in Frontend Devlopment',
      followed: true,
    },
    {
      name: 'Arya Horsley',
      avatar_url: 'https://picsum.photos/id/237/200/300',
      about: 'About section for interests etc',
      followed: true,
    },
  ]

  return (
    <Root>
    <Header1 nav={navigation} title={'Friends'}></Header1>
    <View>
      {list.map((l, i) => (
        <TouchableOpacity
          onPress={() => navigation.navigate( 'ChatRoom', { userName: l.name } )}>
          <UserList i={i} name={l.name} avatar_url={l.avatar_url} followed={l.followed}/>
        </TouchableOpacity>
      ))
      }
    </View>
  </Root>
  );
}