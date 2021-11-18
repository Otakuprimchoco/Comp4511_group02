import React from 'react';
import {
  View,
  Text, StyleSheet, TouchableOpacity, Image
} from 'react-native';
import { ListItem, Icon} from 'react-native-elements';
// import styles from "./GroupCard.styles";
import groupIcon from '../../../assets/icons/Groups_small.png'

export default function GroupCard({i, name, subtitleL, subtitleR, onPressFn, isOwner}) {
  return (
    <ListItem key={i} button bottomDivider
      onPress={onPressFn} style={styles.listItem}>
      <View style={{
        borderColor: '#66B2B2',
        borderRadius: 100,
        borderWidth: 2,
        width: 40,
        height: 40,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#B2D8D8'
      }}>
      <Image
        source={groupIcon}
        resizeMode="contain"
        style={{
            width: 30,
            height: 30,
            tintColor: '#008080',
            marginBottom: 5,
        }}
      />
      </View>
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
        {
          isOwner && 
          <ListItem.Subtitle  style={{fontSize: 14, color: 'red'}}>
            Admin
          </ListItem.Subtitle>
        }
        <ListItem.Subtitle  style={{fontSize: 14}}>{subtitleL}</ListItem.Subtitle>
      </ListItem.Content>
      <View style={{justifyContent: 'center'}}>
        <ListItem.Chevron color={"black"} size={26} iconStyle={styles.iconView}/>
        <ListItem.Subtitle  style={{fontSize: 14}}>{}{subtitleR}</ListItem.Subtitle>
      </View>
    </ListItem>
  );

}

const styles = StyleSheet.create({
  image: {
    width: 30, 
    height: 30,
  },
  iconView: {
    paddingBottom: 10,
  },
  listItem: {
    borderColor: 'lightgrey',
    borderWidth: 0.2,
    backgroundColor: '#F2F2F3',
  }
  });