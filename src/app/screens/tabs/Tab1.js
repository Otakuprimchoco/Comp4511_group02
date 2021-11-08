import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header, Icon } from 'react-native-elements';
import { ModernHeader } from "@freakycoder/react-native-header-view";
import { ClassicHeader } from "@freakycoder/react-native-header-view";


export default function Tab1 ( { navigation } ) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <View>

        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly

          containerStyle={{
            backgroundColor: '#8fcbbc',
            justifyContent: 'space-around',
          }}
          leftComponent={{ icon: 'search', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: 'TAB 1', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      </View>

      <Text>Tab1</Text>
      <Button
        title="Click Here"
        onPress={() => alert( 'Clicked' )}
      />
    </View>
  );


}



const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: 'white'
  },
} );
