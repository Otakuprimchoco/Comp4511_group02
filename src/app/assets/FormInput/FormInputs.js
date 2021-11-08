import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { Switch } from 'react-native-paper';


export default () => {
  const { control, formState: { errors } } = useForm({
    defaultValues: {
      smallinput: '',
      largeinput: '', 
      halfscreenipnut: ''
    }
  });

  console.log('errors', errors);

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Small input</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="smallinput"
        rules={{ required: true }}
      />

      {/* When text goes beyond the box size, the controller view makes it scrollable */}
      <Text style={styles.label}>large input</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.largeInput}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            // making it a multiple line input
            multiline={true}
          />
        )}
        name="largeinput"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Half screen input</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.halfScreenIpnut}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            multiline={true}
          />
        )}
        name="halfscreeninput"
        rules={{ required: true }}
      />
      <View>
      <Text style={styles.label}>Toggle Button</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'black',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
  },
  largeInput: {
    backgroundColor: 'white',
    height: 100,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
  },
  halfScreenIpnut: {
    backgroundColor: 'white',
    height: 40,
    width: "50%",
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
  },
});
