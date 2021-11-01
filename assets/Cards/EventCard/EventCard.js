import React, { Component, useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import ReactDOM from "react-dom";
import { ListItem, Avatar, Icon } from 'react-native-elements';
import styles from "../../EventCard.styles";

export default function EventCard() {

  const [liked, setLiked] = useState(false);

  const list = [
    {
      name: 'Event Name',
      subtitle: 'About',
      state: false,
    },
    {
      name: 'Event Name',
      subtitle: 'About',
      state: false,
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
                <ListItem.Subtitle  style={styles.subtitleView}>{l.subtitle}</ListItem.Subtitle>
              </View>
            </ListItem.Content>
            <View>
              <ListItem.Chevron color="black" size='26' iconStyle={styles.iconView}/>
              {l.state ? (
                <TouchableOpacity  activeOpacity={0.5} onPress={() => (l.state=false)}>
                  <Icon name='heart' type='font-awesome' color='#F97171'/>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity  activeOpacity={0.5} onPress={() => (l.state=true)}>
                <Icon name='heart-o' type='font-awesome'/>
              </TouchableOpacity>
              )}
            </View>
          </ListItem>
        ))
      }
    </View>
  );

}
