import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { Switch } from 'react-native-paper';
import ToggleSwitch from 'rn-toggle-switch'


export default () => {

  return (
    <View style={styles.container}>
      <ToggleSwitch
        text={{on: 'Public', off: 'Private', activeTextColor: 'white', inactiveTextColor: 'grey'}}
        textStyle={{fontWeight: 'bold'}}
        color={{ indicator: 'white', active: 'rgba(32, 193, 173, 1)', inactive:  'rgba( 247, 247, 247, 1)', activeBorder: '#41B4A4', inactiveBorder: '#E9E9E9'}}
        active={true}
        disabled={false}
        width={80}
        radius={25}
        onValueChange={(val) => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // change to centre or flex-start based on required position
    alignItems: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    padding: 50,
  },
  label: {
    color: 'black',
    margin: 10,
    marginLeft: 0,
  },
});
