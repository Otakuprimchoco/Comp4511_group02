import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header, Icon } from 'react-native-elements';
import { ModernHeader } from "@freakycoder/react-native-header-view";
import { ClassicHeader } from "@freakycoder/react-native-header-view";
import GroupSubNavigation from '../../navigation/GroupsSubNavigation'
import { NavigationContainer } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();
export default function GroupsLanding ( { navigation } ) {
  return (
    <View style={styles.container}>

        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly

          containerStyle={{
            backgroundColor: '#8fcbbc',
            justifyContent: 'space-around',
          }}
          leftComponent={{ icon: 'search', color: 'darkcyan', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: 'TAB 2', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      <GroupSubNavigation/>
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
    backgroundColor: 'white',
    // marginTop: 100
  },
} );
