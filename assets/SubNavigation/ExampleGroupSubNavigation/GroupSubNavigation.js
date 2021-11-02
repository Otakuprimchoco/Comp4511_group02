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
        tabBarIndicatorStyle: {fontFamily: 'Roboto_700Bold', backgroundColor: '#EDE98C'},
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
  
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <NavigationContainer>
        <Tabs startingpage={startingpage}/>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Tabs startingpage={startingpage}/>
      </NavigationContainer>
    );
    }
}