import React from 'react';
import {
  View, TouchableOpacity, Text, Image 
} from 'react-native';
import UserList from '../../assets/Cards/UserList/UserList';
import Root from '../../assets/UserProfilePopUp/Root';
import Popup from '../../assets/UserProfilePopUp/Popup';
import Header1 from '../../assets/Header/Header1';

export default function MemberList({route, navigation}) {
  const { members } = route.params

  return (
    <Root>
    <Header1 nav={navigation} title={'Friends'}></Header1>
    <View>
      {members.map((l, i) => (
          <UserList i={i} name={l.name} avatar_url={l.avatar_url} followed={false}/>
      ))
      }
    </View>
  </Root>
  );

}