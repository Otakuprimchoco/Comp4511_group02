import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header, Icon } from 'react-native-elements';
import { ModernHeader } from "@freakycoder/react-native-header-view";
import { ClassicHeader } from "@freakycoder/react-native-header-view";
import Tab2 from './Tab2';
import Tab3 from './Tab3';
const Tab1 = ( { navigation } ) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={Tab3} />
    </Tab.Navigator>,
    <View style={styles.container}>
      <View>

        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly

          containerStyle={{
            backgroundColor: 'darkcyan',
            justifyContent: 'space-around',
          }}
          leftComponent={{ icon: 'search', color: 'darkcyan', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
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



export default Tab1;

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: '#8fcbbc'
  },
} );
