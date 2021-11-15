import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  onBlur,
  ScrollView,
  Alert
} from "react-native";
import { Appbar } from 'react-native-paper';

export default function Register01( {navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const [publicACC, setPublicACC] = useState(true);
  const [student, setStudent] = useState(true);

  const verifyToReg02 = () => {
    if (email == 0 || password == 0 || confirmPassword == 0 || name == 0 ) {
      Alert.alert('Invalid Input!', 'One or more required fields are empty.', [
        {text: 'Okay'}
      ]);
    } else if (password != confirmPassword) {
      Alert.alert('Invalid Input!', 'Passwords do not match.', [
        {text: 'Okay'}
      ]);
    } else {
      navigation.navigate('Register02', {email: email, password: password, name: name, publicACC: publicACC, student: student});
    }
    
  };


  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <ScrollView style={styles.container}>

    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>

      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>Full Name</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your full name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
          value={name}
          onBlur={onBlur}
        />
      </View>

      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>Email</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
      </View>

      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>Password</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>

      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>Confirm Password</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
          value={confirmPassword}
        />
      </View>

      <View style={styles.question}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color:'#008080'}}>Which represents you best?</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20,}}>
        <TouchableOpacity style={student ? styles.buttonOn : styles.buttonOff} onPress={() => setStudent(true)}>
          <Text style={student ? styles.buttonTextOn: styles.buttonTextOff}>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity style={student ? styles.buttonOff : styles.buttonOn} onPress={() => setStudent(false)}>
            <Text style={student ? styles.buttonTextOff : styles.buttonTextOn}>Company</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.question}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color:'#008080'}}>What type of account do you want?</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20,}}>
        <TouchableOpacity style={publicACC ? styles.buttonOn : styles.buttonOff} onPress={() => setPublicACC(true)}>
          <Text style={publicACC ? styles.buttonTextOn: styles.buttonTextOff}>Public Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={publicACC ? styles.buttonOff : styles.buttonOn} onPress={() => setPublicACC(false)}>
            <Text style={publicACC ? styles.buttonTextOff : styles.buttonTextOn}>Private Account</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.loginBtn}  onPress={() => verifyToReg02()}>
          <Text style={styles.loginText}>Next</Text>
        </TouchableOpacity>
      </View>


      <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 18,}}>Already a User? </Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#66B2B2',}}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    marginBottom: 40,
    width: 200, 
    height: 200,
  },
  buttonOn: {
    backgroundColor: "#008080", 
    width: 175, 
    height: 50,
    justifyContent: 'center',
  },
  buttonOff: {
    backgroundColor: "#ffffff", 
    borderColor: 'grey', 
    borderWidth: 2, 
    width: 175, 
    height: 50,
    justifyContent: 'center',

  },
  buttonTextOn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonTextOff: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },

  inputView: {
    alignItems: "flex-start",
    margin: 15,
  },

  TextInput: {
    height: 50,
    paddingLeft: 20,
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
  },

  forgot_button: {
    fontWeight: 'bold',
    color: '#66B2B2',
    fontSize: 15,
  },

  loginBtn: {
    width: 94,
    height: 52,
    borderRadius: 10,
    marginTop: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008080",
  },

  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  question: {
    backgroundColor:'#B2D8D8',
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingTop: 5,
  }
});