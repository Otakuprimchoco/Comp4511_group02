import * as React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatScreen from '../screens/Chats/Chats'

function DiscoverGroupsScreen () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function ChatSubNavigation () {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly

        containerStyle={{
          backgroundColor: '#8fcbbc',
          justifyContent: 'space-around',
        }}
        leftComponent={{ icon: 'search', color: 'darkcyan', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'Chats', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
        rightComponent={{ icon: 'account-circle', type: 'material-community', color: '#fff' }}
      />
      <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={{
          tabBarActiveTintColor: '#ffffff',
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
          tabBarIndicatorStyle: { backgroundColor: '#EDE98C' },
          tabBarStyle: { backgroundColor: '#66B2B2' },
          tabBarAllowFontScaling: true,
        }}
      >
        <Tab.Screen
          name="Chats"
          component={ChatScreen}
          options={{ tabBarLabel: 'Chats', tabBarAccessibilityLabel: 'Chats' }}
        />
        <Tab.Screen
          name="Friend List"
          component={DiscoverGroupsScreen}
          options={{ tabBarLabel: 'Friend List', tabBarAccessibilityLabel: 'Friend List' }}
        />
      </Tab.Navigator>
    </View>
  );
}
