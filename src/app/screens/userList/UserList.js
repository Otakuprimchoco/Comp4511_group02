import React from 'react';
import {
  View, TouchableOpacity, Text, Image 
} from 'react-native';
import UserList from '../../assets/Cards/UserList/UserList';
import Root from '../../assets/UserProfilePopUp/Root';
import Popup from '../../assets/UserProfilePopUp/Popup';
import Header1 from '../../assets/Header/Header1';

export default function UserListPage({navigation}) {

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
    <Header1 nav={navigation} title={'Users'}></Header1>
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