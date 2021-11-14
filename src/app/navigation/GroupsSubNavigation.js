import * as React from 'react';
import { Text, View } from 'react-native';
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

const Tab = createMaterialTopTabNavigator();

export default function GroupSubNavigation({navigation}) {
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
          centerComponent={{ text: 'Groups', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
          rightComponent={{ icon: 'account-circle', type: 'material-community',  color: '#fff', onPress: () => navigation.push('Profile') }}
        />
      <Tab.Navigator
      initialRouteName="DiscoverGroups"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
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
