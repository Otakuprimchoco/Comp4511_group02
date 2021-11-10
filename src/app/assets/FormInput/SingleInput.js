import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { Switch } from 'react-native-paper';


export default () => {
  const { control, formState: { errors } } = useForm({
    defaultValues: {
      input: '', 
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sample input </Text>
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
        name="input"
        rules={{ required: true }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  label: {
    color: 'black',
    margin: 10,
    marginLeft: 0,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    width: 300,
  },

});
