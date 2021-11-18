import React, { useState } from "react";
import { ActionSheetIOS, Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [result, setResult] = useState("🔮");

  const onPress = () =>
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        // url: './assets/logos/logo2.png',
        subject: 'hello',
        message: 'hello',
        excludedActivityTypes: [
          'com.apple.UIKit.activity.PostToTwitter'
        ]
      },
      (error) => alert(error),
      (completed, method) => {
        var text;
        if (completed) {
          text = `Shared via ${method}`;
        } else {
          text = 'You didn\'t share';
        }
      }
    );

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Button onPress={onPress} title="Show Action Sheet" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  result: {
    fontSize: 64,
    textAlign: "center"
  }
});

export default App;