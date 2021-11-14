import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MainButton from '../buttons/MainButton';
import {Avatar} from 'react-native-elements';

export default function ImagePickerExample() {
  const [image, setImage] = useState('https://picsum.photos/id/237/200/300');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <Avatar rounded size="xlarge" source={{ uri: image }} />
      <View style={{padding: 10 }}>
        <TouchableOpacity style={styles.createBtn} onPress={pickImage}>
          <Text style={styles.createText}>Change Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderWidth: 1,
    borderColor: 'black',
    width: 100,
    height: 100,
    borderRadius: 100,
    marginLeft: 50
  },
  createBtn: {
    width: 173,
    height: 52,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008080"
  },
  createText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
