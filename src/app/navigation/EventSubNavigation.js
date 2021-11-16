// subnavigation for event pages -> top bar navigation

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
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
          barStyle="light-content" // or directly

          containerStyle={{
            backgroundColor: '#66B2B2',
            justifyContent: 'space-around',
          }}
          leftComponent={{ icon: 'search', color: 'darkcyan', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: 'Events', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
          rightComponent={<View style={styles.Header}>
            <Icon
              name='notifications-none'
              color='#00aced'
              iconStyle={{ color: '#fff' }}
              onPress={() => {
                this.setState( { visible: true } );
              }}
            />
            <Icon
              name='account-circle'
              type='MaterialCommunityIcons'
              color='#517fa4'
              iconStyle={{ color: '#fff' }}
              onPress={() => navigation.navigate( 'Profile' )}
            />
          </View>}
        />  
      <Tab.Navigator
      initialRouteName="DiscoverEvents"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarLabelStyle: { fontSize: 11, fontWeight: 'bold' },
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
          options={{ tabBarLabel: 'Favorites', tabBarAccessibilityLabel: 'Favorites' }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  Button: {
    backgroundColor: "#008080",
    position: 'absolute',
    borderRadius: 10,
    bottom: 10,
    alignItems: 'center',
  },
  ButtonText: {
    color: 'white',
    padding: 10,
    fontSize: 16
  },
  Header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPop: {
    height: 500,
    width: 325,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }

} );