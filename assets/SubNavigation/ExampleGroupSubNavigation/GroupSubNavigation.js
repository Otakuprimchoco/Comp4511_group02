import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function DiscoverGroupsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Discover Groups!</Text>
    </View>
  );
}

function MyGroupsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Groups!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function Tabs({startingpage}) {
  return (
    <Tab.Navigator
      initialRouteName= {startingpage}
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarLabelStyle: {fontSize: 12,},
        tabBarIndicatorStyle: {backgroundColor: '#EDE98C'},
        tabBarStyle: { backgroundColor: '#66B2B2' },
        tabBarAllowFontScaling: true,
      }}
    >
      <Tab.Screen
        name="DiscoverGroups"
        component={DiscoverGroupsScreen}
        options={{ tabBarLabel: 'Discover Groups', tabBarAccessibilityLabel: 'Discover Groups' }}
      />
      <Tab.Screen
        name="MyGroups"
        component={MyGroupsScreen}
        options={{ tabBarLabel: 'My Groups', tabBarAccessibilityLabel: 'My Groups' }}
      />
    </Tab.Navigator>
  );
}
export default function GroupSubNavigation({startingpage}) {
return (
      <NavigationContainer>
        <Tabs startingpage={startingpage}/>
      </NavigationContainer>
    );
}
