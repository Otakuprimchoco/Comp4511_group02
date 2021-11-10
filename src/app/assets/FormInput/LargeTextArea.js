import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { Switch } from 'react-native-paper';


export default () => {
  const { control, formState: { errors } } = useForm({
    defaultValues: {
      largeinput: '', 
    }
  });

  return (
    <View style={styles.container}>
      {/* When text goes beyond the box size, the controller view makes it scrollable */}
      <Text style={styles.label}>Large input</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  label: {
    color: 'black',
    margin: 20,
    marginLeft: -200,

  },
  largeInput: {
    backgroundColor: 'white',
    height: 150,
    padding: 7,
    borderRadius: 4,
    borderWidth: 1,
    width: 300,
  },
});
