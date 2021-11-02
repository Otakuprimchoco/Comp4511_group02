import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Tabs from './src/navigation/tabs';

import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (

    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App;
