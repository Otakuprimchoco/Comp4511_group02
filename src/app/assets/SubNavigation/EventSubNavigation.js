import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

function DiscoverEventsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Discover Groups!</Text>
    </View>
  );
}

function MyEventsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Groups!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="DiscoverEvents"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarLabelStyle: {fontFamily: 'Roboto_700Bold', fontSize: 12,},
        tabBarIndicatorStyle: {backgroundColor: '#EDE98C'},
        tabBarStyle: { backgroundColor: '#66B2B2' },
        tabBarAllowFontScaling: true,
      }}
    >
      <Tab.Screen
        name="DiscoverEvents"
        component={DiscoverEventsScreen}
        options={{ tabBarLabel: 'Discover Events', tabBarAccessibilityLabel: 'Discover Events' }}
      />
      <Tab.Screen
        name="MyEvents"
        component={MyEventsScreen}
        options={{ tabBarLabel: 'My Events', tabBarAccessibilityLabel: 'My Events' }}
      />
    </Tab.Navigator>
  );
}
export default function EventSubNavigation() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    );
    }
}
