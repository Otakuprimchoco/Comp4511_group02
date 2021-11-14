// subnavigation for event pages -> top bar navigation

import * as React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyEvents from '../screens/events/MainScreens/MyEvents';
import DiscoverEvents from '../screens/events/MainScreens/DiscoverEvents'
import PastEvents from '../screens/events/MainScreens/PastEvents';

const Tab = createMaterialTopTabNavigator();

export default function EventSubNavigation({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"

          containerStyle={{
            backgroundColor: '#8fcbbc',
            justifyContent: 'space-around',
          }}
          leftComponent={{ icon: 'search', color: 'darkcyan', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: 'Events', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
          rightComponent={{ icon: 'account-circle', type: 'material-community',  color: '#fff', onPress: () => navigation.push('Profile') }}
        />
      <Tab.Navigator
      initialRouteName="DiscoverEvents"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
          tabBarIndicatorStyle: {backgroundColor: '#EDE98C'},
          tabBarStyle: { backgroundColor: '#66B2B2' },
          tabBarAllowFontScaling: true,
        }}
        >
        <Tab.Screen
          name="MyEvents"
          component={MyEvents}
          options={{ tabBarLabel: 'My Events', tabBarAccessibilityLabel: 'My Events' }}
        />
        <Tab.Screen
          name="DiscoverEvents"
          component={DiscoverEvents}
          options={{ tabBarLabel: 'Discover Events', tabBarAccessibilityLabel: 'Discover Events' }}
        />
        <Tab.Screen
          name="PastEvents"
          component={PastEvents}
          options={{ tabBarLabel: 'Past Events', tabBarAccessibilityLabel: 'Past Events' }}
        />
      </Tab.Navigator>
    </View>
  );
}