import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import styles from "./UserList.styles";

export default function UserList() {

  const list = [
    {
      name: 'Name',
      avatar_url: 'https://picsum.photos/seed/picsum/200/300',
      followed: true,
    },
    {
      name: 'Name',
      avatar_url: 'https://picsum.photos/id/237/200/300',
      followed: false,
    },
  ]

  return (
    <View>
      {
        list.map((l, i) => (
              <ListItem key={i} bottomDivider>
              <Avatar size="medium" rounded source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <View>
                  <ListItem.Title style={styles.titleView}>{l.name}</ListItem.Title>
                </View>
              </ListItem.Content>
              <View>
                {l.followed ? (
                <TouchableOpacity style={styles.followView} onPress={() => (l.followed=false)}>
                  <Icon name='user-times' type='font-awesome' color='#008080'/>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity  style={styles.followView} onPress={() => (l.followed=true)}>
                  <Icon name='user-plus' type='font-awesome'  color='#ffffff'/>
                </TouchableOpacity>
              )}
              </View>
              
            </ListItem> 
        ))
      }
    </View>
  );

}
