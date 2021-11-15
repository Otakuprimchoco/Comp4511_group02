import React from "react";
import {
  View,
} from "react-native";
import { Appbar } from 'react-native-paper';
export default function ProfileHeader({ nav }) {

    const _goBack = () => nav.pop();

    const _handleNotifications= () => nav.navigate('Notifications');

      return (
        <View>
            <Appbar.Header style={{backgroundColor: '#66B2B2'}}>
                <Appbar.BackAction color="white" onPress={_goBack}/>
                <Appbar.Content style={{alignItems: 'center'}} titleStyle={{fontWeight: 'bold', color: 'white', fontSize: 23}} title="Profile"/> 
                <Appbar.Action size={33} icon="bell" color='#fff'  onPress={_handleNotifications} />
            </Appbar.Header>
        </View>
        
      );
}