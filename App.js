import React, {useState, useEffect, useMemo, useReducer} from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/app/screens/login/Login';
import Register01 from './src/app/screens/login/Register01';
import Register02 from './src/app/screens/login/Register02';
import Profile from './src/app/screens/profile/Profile';
import Main from './src/app/navigation/tabs'
import CreateGroup1 from './src/app/screens/groups/CreateGroup1'
import CreateGroup2 from './src/app/screens/groups/CreateGroup2'
import GroupSettings from './src/app/screens/groups/GroupSettings'

import ChatRoom from './src/app/screens/chat/UserChatScreen'
import GroupPage from './src/app/screens/groups/GroupPage'
import {AuthContext} from './src/app/services/Context'

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
    signIn: (username, password) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      // console.log('user token: ', userToken);
      let userToken;
      userToken = null;
      if (username == 'User' && password == '123456') {
        userToken='fgkj';
      }
      dispatch({ type: 'LOGIN', id: username, token: userToken });
    },
    signOut: () => {
      // setUserToken(null);
      // setIsLoading(false);
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      dispatch({ type: 'RETRIEVE_TOKEN', token: 'fgkj' });
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
              <Stack.Navigator initialRouteName="Profile" >
              <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
                  <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
                  <Stack.Screen options={{ headerShown: false }} name="CreateGroup1" component={CreateGroup1} />
                  <Stack.Screen options={{ headerShown: false }} name="CreateGroup2" component={CreateGroup2} />
                  <Stack.Screen options={{ headerShown: false }} name="GroupSettings" component={GroupSettings} />
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
            ) : (
            <Stack.Navigator initialRouteName="Login">
                  <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                  <Stack.Screen options={{ headerShown: false }} name="Register01" component={Register01} />
                  <Stack.Screen options={{ headerShown: false }} name="Register02" component={Register02} />
            </Stack.Navigator>
            )
          }
      </NavigationContainer>
    </View>
    </AuthContext.Provider>
  )
}

export default App;
