import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const Tab1 = ( { navigation } ) => {
  return (
    <View style={styles.container}>
      <Text>Tab 2</Text>
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
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
  },
} );
