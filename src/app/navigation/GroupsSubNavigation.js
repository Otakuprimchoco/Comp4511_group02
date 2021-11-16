import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
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
  // Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import MyGroupsScreen from '../screens/groups/MyGroups'
import DiscoverGroupsScreen from '../screens/groups/DiscoverGroups'
import Header2 from '../assets/Header/Header2';

const Tab = createMaterialTopTabNavigator();

export default function GroupSubNavigation({route, navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header2 title='Groups' nav={navigation}></Header2>
      <Tab.Navigator
      initialRouteName="DiscoverGroups"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarLabelStyle: { fontSize: 11, fontWeight: 'bold' },
          tabBarIndicatorStyle: {backgroundColor: '#EDE98C'},
          tabBarStyle: { backgroundColor: '#66B2B2' },
          tabBarAllowFontScaling: true,
        }}
        >
        <Tab.Screen
          name="DiscoverGroups"
          component={DiscoverGroupsScreen}
          initialParams={{userToken: route.params.userToken}}
          options={{ tabBarLabel: 'Discover Groups', tabBarAccessibilityLabel: 'Discover Groups' }}
        />
        <Tab.Screen
          name="MyGroups"
          component={MyGroupsScreen}
          initialParams={{userToken: route.params.userToken}}
          options={{ tabBarLabel: 'My Groups', tabBarAccessibilityLabel: 'My Groups' }}
        />
      </Tab.Navigator>
    </View>
  );
}
// export default function GroupSubNavigation() {
//   let [fontsLoaded] = useFonts({
//     Roboto_100Thin,
//     Roboto_100Thin_Italic,
//     Roboto_300Light,
//     Roboto_300Light_Italic,
//     Roboto_400Regular,
//     Roboto_400Regular_Italic,
//     Roboto_500Medium,
//     Roboto_500Medium_Italic,
//     // Roboto_700Bold,
//     Roboto_700Bold_Italic,
//     Roboto_900Black,
//     Roboto_900Black_Italic,
//   });

//   if (!fontsLoaded) {
//     return (
//       <NavigationContainer independent={true}>
//         <Tabs />
//       </NavigationContainer>
//     );
//   } else {
//     return (
//       <NavigationContainer independent={true}>
//         <Tabs />
//       </NavigationContainer>
//     );
//     }
// }
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