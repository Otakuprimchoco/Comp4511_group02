import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/app/screens/Login';
import Register01 from './src/app/screens/Register01';
import Register02 from './src/app/screens/Register02';
import Profile from './src/app/screens/Profile';
import Main from './src/app/navigation/tabs'
import CreateGroup1 from './src/app/screens/groups/CreateGroup1'
import CreateGroup2 from './src/app/screens/groups/CreateGroup2'

import ChatRoom from './src/app/screens/Chats/UserChatScreen'
import GroupPage from './src/app/screens/groups/GroupPage'


const Stack = createStackNavigator();
const App = () => {
  const ref = React.useRef( null );

  return (

    <View style={{ flex: 1 }}>
      <NavigationContainer ref={ref}>

        <Stack.Navigator initialRouteName="Login" >
          {/* The Main page navigation */}
          <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="Register01" component={Register01} />
          <Stack.Screen options={{ headerShown: false }} name="Register02" component={Register02} />
          <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
          <Stack.Screen options={{ headerShown: false }} name="CreateGroup1" component={CreateGroup1} />
          <Stack.Screen options={{ headerShown: false }} name="CreateGroup2" component={CreateGroup2} />
          <Stack.Screen options={{ headerShown: true }} name="ChatRoom" component={ChatRoom}
            options={( { route } ) => ( {
              title: route.params.userName,
              headerBackTitleVisible: false,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerStyle: {
                backgroundColor: '#8fcbbc',
              },
            } )} />
          <Stack.Screen options={{ headerShown: false }} name="GroupPage" component={GroupPage} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App;
