import React from "react";
import {
  View,
} from "react-native";
import { Appbar } from 'react-native-paper';
export default function Header3({ nav, title }) {

    const _goBack = () => nav.pop();

        // just go back
      return (
        <View>
            <Appbar.Header style={{backgroundColor: '#66B2B2'}}>
                <Appbar.BackAction color="white" onPress={_goBack}/>
                <Appbar.Content style={{alignItems: 'center'}} titleStyle={{fontWeight: 'bold', color: 'white', fontSize: 23}} title={title}/>
            </Appbar.Header>
        </View>
      );
}