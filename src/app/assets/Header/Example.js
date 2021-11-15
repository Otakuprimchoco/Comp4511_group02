import React from "react";
import {
  View,
} from "react-native";
import Header2 from './Header2'
export default function Example({navigation}) {

      return (
        <View>
            <Header2 title='Notif'  nav={navigation} ></Header2>
        </View>
      );
}