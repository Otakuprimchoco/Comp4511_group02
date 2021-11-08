import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/app/screens/Login';
import Register01 from './src/app/screens/Register01';
import Register02 from './src/app/screens/Register02';
import Profile from './src/app/screens/Profile';
import Main from './src/app/navigation/tabs'

const Stack = createStackNavigator();
const App = () => {
  const ref = React.useRef(null);

  return (

    <View style={{ flex: 1 }}>
      <NavigationContainer  ref={ref}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          {/* The Main page navigation */}
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register01" component={Register01} />
          <Stack.Screen name="Register02" component={Register02} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App;
