import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { ModernHeader } from "@freakycoder/react-native-header-view";
import { ClassicHeader } from "@freakycoder/react-native-header-view";

const Tab1 = ( { navigation } ) => {
  return (

    <View style={styles.container}>
      <View>

        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly

          containerStyle={{
            backgroundColor: 'darkcyan',
            justifyContent: 'space-around',
          }}
          leftComponent={{ icon: 'search', color: 'darkcyan', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      </View>

      <Text>Tab1</Text>
      <Button
        title="Click Here"
        onPress={() => alert( 'Clicked' )}
      />
    </View>
  );


}



export default Tab1;

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: '#8fcbbc'
  },
} );
