//Learn from tutorial https://www.youtube.com/watch?v=bGGeD5RkdzQ
import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Button } from 'react-native';
import { Header, Icon } from 'react-native-elements';
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
import Header1 from "../../assets/Header/Header1";

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
          <Header1 title='Chats' nav={navigation}></Header1>
        </View>

        <Container>
          <FlatList
            data={Messages}
            keyExtractor={item => item.id}
            renderItem={( { item } ) => (
              <Card onPress={() => navigation.navigate( 'ChatRoom', { userName: item.userName } )}>
                <UserInfo>
                  <UserImgWrapper>
                    <UserImg source={item.userImg} />
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

        </Container>






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
