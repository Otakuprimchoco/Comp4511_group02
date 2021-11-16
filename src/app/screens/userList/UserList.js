import React from 'react';
import {
  View, TouchableOpacity, Text, Image 
} from 'react-native';
import UserList from '../../assets/Cards/UserList/UserList';
import Root from '../../assets/UserProfilePopUp/Root';
import Popup from '../../assets/UserProfilePopUp/Popup';
import Header1 from '../../assets/Header/Header1';

export default function UserListPage({route, navigation}) {
  const { members } = route.params

  return (
    <Root>
    <Header1 nav={navigation} title={'Users'}></Header1>
    <View>
      {members.map((l, i) => (
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