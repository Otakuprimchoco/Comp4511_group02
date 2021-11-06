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
  onBlur, SafeAreaView, ScrollView,
} from "react-native";
import { Appbar, Switch } from 'react-native-paper';
import {Avatar} from 'react-native-elements';
import ImagePickerExample from '../../assets/ChangePhoto/ChangePhotoComponent'
import InterestList from "../../assets/LoginReg/SelectionList/InterestList";
export default function Profile() {
  const [role, setRole] = useState("");
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


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

    <View style={{alignItems: 'center', padding: 10}}>
    <Avatar rounded size="xlarge" source={{uri: 'https://picsum.photos/id/237/200/300'}}/>
    <ImagePickerExample></ImagePickerExample>
    </View>



    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity style={{backgroundColor: "#008080"}}>
          <Text style={styles.loginText}>Public</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: "#ffffff", borderColor: 'black', borderWidth: 2,}}>
          <Text style={{color: '#008080'}}>Private</Text>
      </TouchableOpacity>
    </View>

      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>Full Name</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
        <TextInput
          style={styles.TextInput}
          placeholder={name}
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
          value={name}
          onBlur={onBlur}
        />

      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      </View>

      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>Role</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
        <TextInput
          style={styles.TextInput}
          placeholder={role}
          placeholderTextColor="#003f5c"
          onChangeText={(role) => setRole(role)}
          value={role}
        />
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      </View>

      <View style={styles.inputView}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14,}}>About/Interests</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
        <TextInput
          style={styles.TextInput}
          placeholder={about}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(about) => setAbout(about)}
          value={about}
        />
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>

      <View style={styles.question}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14, color:'#008080'}}>Notifications for Groups</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity style={{backgroundColor: "#008080"}}>
          <Text style={styles.loginText}>On</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: "#ffffff", borderColor: 'black', borderWidth: 2,}}>
          <Text style={{color: '#008080'}}>Off</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.question}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14, color:'#008080'}}>Notifications for Events</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity style={{backgroundColor: "#008080"}}>
          <Text style={styles.loginText}>On</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: "#ffffff", borderColor: 'black', borderWidth: 2,}}>
          <Text style={{color: '#008080'}}>Off</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.question}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14, color:'#008080'}}>Notifications for Chat</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity style={{backgroundColor: "#008080"}}>
          <Text style={styles.loginText}>On</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: "#ffffff", borderColor: 'black', borderWidth: 2,}}>
          <Text style={{color: '#008080'}}>Off</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.question}>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14, color:'#008080'}}>Interests</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
      </View>

      <InterestList></InterestList>

      <View style={{flexDirection: 'row', alignItems: 'space-around'}}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Change Password</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Logout</Text>
          </TouchableOpacity>
        </View>
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

  inputView: {
    alignItems: "flex-start",
    margin: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 20,
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
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
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