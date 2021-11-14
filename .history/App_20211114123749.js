import React, {useState, useEffect, useMemo, useReducer} from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/app/screens/login/Login';
import Register01 from './src/app/screens/login/Register01';
import Register02 from './src/app/screens/login/Register02';
import ForgotPassword from './src/app/screens/login/ForgotPassword';
import ForgotPassword2 from './src/app/screens/login/ForgotPassword2';
import ChangePassword1 from './src/app/screens/login/ChangePassword1';
import Profile from './src/app/screens/profile/Profile';
import Main from './src/app/navigation/tabs'
import CreateGroup1 from './src/app/screens/groups/CreateGroup1'
import CreateGroup2 from './src/app/screens/groups/CreateGroup2'
import GroupSettings from './src/app/screens/groups/GroupSettings'
import EventSelected from './src/app/screens/events/EventSelected';
import AddEvent from './src/app/screens/events/AddEventFlow/AddEvent';
import AddEvent2 from './src/app/screens/events/AddEventFlow/AddEvent2';
import CreatedEvent from './src/app/screens/events/AddEventFlow/CreatedEvent';
import EventSettings from './src/app/screens/events/AddEventFlow/EventSettings';

import ChatRoom from './src/app/screens/chat/UserChatScreen';
import GroupPage from './src/app/screens/groups/GroupPage';
import {AuthContext} from './src/app/services/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const App = () => {
  const ref = React.useRef( null );
  // const [userToken, setUserToken] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  const initialLoginState = {
    isLoading: true,
    userToken: null,
    userName: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      // console.log('user token: ', userToken);
      const userToken = String(foundUser[0].userToken);
      const username = String(foundUser[0].email);
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', id: username, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const username = String(foundUser[0].email);
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'REGISTER', id: username, token: userToken });
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  
  return (
    <AuthContext.Provider value={authContext}>
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={ref}>
        
          {/* The Main page navigation */}
          { (loginState.userToken != null) ?
            (
              <Stack.Navigator initialRouteName="Main" >
                <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
                <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} initialParams={{userToken: loginState.userToken}}/> 
                  <Stack.Screen options={{ headerShown: false }} name="CreateGroup1" component={CreateGroup1} />
                  <Stack.Screen options={{ headerShown: false }} name="CreateGroup2" component={CreateGroup2} />
                  <Stack.Screen options={{ headerShown: false }} name="GroupSettings" component={GroupSettings} />
                  <Stack.Screen options={{ headerShown: false }} name="EventSelected" component={EventSelected} />
                  <Stack.Screen options={{ headerShown: false }} name="AddEvent" component={AddEvent} />
                  <Stack.Screen options={{ headerShown: false }} name="AddEvent2" component={AddEvent2} />
                  <Stack.Screen options={{ headerShown: false }} name="CreatedEvent" component={CreatedEvent} />
                  <Stack.Screen options={{ headerShown: false }} name="EventSettings" component={EventSettings} />
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
                  <Stack.Screen options={{ headerShown: false }} name="ChangePassword" component={ChangePassword1} initialParams={{userToken: loginState.userToken}}/>
              </Stack.Navigator>
            ) : (
            <Stack.Navigator initialRouteName="Login">
                  <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                  <Stack.Screen options={{ headerShown: false }} name="Register01" component={Register01} />
                  <Stack.Screen options={{ headerShown: false }} name="Register02" component={Register02} />
                  <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPassword} />
                  <Stack.Screen options={{ headerShown: false }} name="ForgotPassword2" component={ForgotPassword2} />
            </Stack.Navigator>
            )
          }
      </NavigationContainer>
    </View>
    </AuthContext.Provider>
  )
}

export default App;
