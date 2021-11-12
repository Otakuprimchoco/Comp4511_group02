//Learn from tutorial https://www.youtube.com/watch?v=bGGeD5RkdzQ
import React from 'react';
import { View, StyleSheet, FlatList, } from 'react-native';
import { Header } from 'react-native-elements';
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
];


const MessagesScreen = ( { navigation } ) => {
  return (

    <View style={styles.container}>

      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly

        containerStyle={{
          backgroundColor: '#8fcbbc',
          justifyContent: 'space-around',
        }}
        leftComponent={{ icon: 'search', color: 'darkcyan', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'Chats', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
        rightComponent={{ icon: 'account-circle', type: 'material-community', color: '#fff' }}
      />
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
    </View>

  );
};

export default MessagesScreen;

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
} );