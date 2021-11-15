import React from "react";
import {
  View,
} from "react-native";
import { Appbar } from 'react-native-paper';
export default function Header2({ nav , title}) {
// just go search, profile and notif
    const _handleSearch = () => console.log('global search page');

    const _handleNotifications= () => nav.navigate('Notifications');

    const _handleProfile = () => nav.navigate('Profile');

      return (
        <View>
            <Appbar.Header style={{backgroundColor: '#66B2B2'}}>
                <Appbar.Action size={35} icon="magnify" color='#fff'  onPress={_handleSearch} />
                <Appbar.Content style={{alignItems: 'center'}} titleStyle={{fontWeight: 'bold', color: 'white', fontSize: 23}} title={title}/> 
                <Appbar.Action size={33} icon="bell" color='#fff'  onPress={_handleNotifications} />
                <Appbar.Action size={35} icon='account-circle' type='material-community' color='#fff' onPress={_handleProfile} />
            </Appbar.Header>
        </View>
        
      );
}