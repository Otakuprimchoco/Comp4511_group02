//Learn from tutorial https://www.youtube.com/watch?v=bGGeD5RkdzQ
import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Button } from 'react-native';
import { Header, Icon, } from 'react-native-elements';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './MessageStyles';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Header2 from "../../assets/Header/Header2";
import { ScrollView } from 'react-native-gesture-handler';

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require( '../../assets/users/user-3.jpg' ),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require( '../../assets/users/user-1.jpg' ),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require( '../../assets/users/user-4.jpg' ),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require( '../../assets/users/user-6.jpg' ),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require( '../../assets/users/user-7.jpg' ),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'Kmart Hey',
    userImg: {uri: 'https://picsum.photos/id/237/200/300'},
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '7',
    userName: 'Cameron Aarya',
    userImg: {uri: 'https://picsum.photos/id/237/200/300'},
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '8',
    userName: 'Arya Carter',
    userImg: {uri: 'https://picsum.photos/id/237/200/300'},
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '9',
    userName: 'Manpreet Mondal',
    userImg: require( '../../assets/users/user-7.jpg' ),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  }
];


export default class MessagesScreen extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      count: 0,
    }
  }
  render () {
    const { navigation } = this.props;
    return (

      <View style={styles.container} >

        <View style={styles.container1} >
          <Header2 title='Chats' nav={navigation}></Header2>
        </View>

        <ScrollView>
          <FlatList
            data={Messages}
            keyExtractor={item => item.id}
            renderItem={( { item } ) => (
              <Card onPress={() => navigation.navigate( 'ChatRoom', { userName: item.userName } )}>
                <UserInfo>
                  <UserImgWrapper>
                    <UserImg source={item.userImg}/>
                  </UserImgWrapper>
                  <TextSection>
                    <UserInfoText>
                      <UserName>{item.userName}</UserName>
                      <PostTime>{item.messageTime}</PostTime>
                    </UserInfoText>
                    <MessageText>{item.messageText}</MessageText>
                  </TextSection>
                </UserInfo>
              </Card>
            )}
          />

        </ScrollView>



        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            position: 'absolute',
            bottom: 10,
            right: 10,
            height: 80,
            backgroundColor: '#fff',
            borderRadius: 100,
            shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.46,
              shadowRadius: 11.14,
          }}

          onPress = {() => navigation.navigate("FriendsList")}
        >
          <Icon name='add-comment' type='material' size={45} color='#01a699' />
        </TouchableOpacity>


      </View >


    );
  }
};



const styles = StyleSheet.create( {
  container: {
    flex: 1,

  },

  Button: {
    backgroundColor: "#008080",
    position: 'absolute',
    borderRadius: 10,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  ButtonText: {
    color: 'white',
    padding: 10,
    fontSize: 16
  },
  Header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPop: {
    height: 500,
    width: 325,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }

} );
