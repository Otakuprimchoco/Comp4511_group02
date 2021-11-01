import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import styles from "./GroupCard.styles";

export default function GroupCard() {

  const list = [
    {
      name: 'Group Name',
      subtitleL: '# Members',
      subtitleR: 'Public'
    },
    {
      name: 'Group Name',
      subtitleL: '# Members',
      subtitleR: 'Private'
    },
  ]

  return (
    <View>
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <View>
                <ListItem.Title style={styles.titleView}>{l.name}</ListItem.Title>
              </View>
              <View>
                <ListItem.Subtitle  style={styles.subtitleView}>{l.subtitleL}</ListItem.Subtitle>
              </View>
            </ListItem.Content>
            <View>
              <ListItem.Chevron color="black" size='26' iconStyle={styles.iconView}/>
              <ListItem.Subtitle  style={styles.subtitleView}>{l.subtitleR}</ListItem.Subtitle>
            </View>
          </ListItem>
        ))
      }
    </View>
  );

}
