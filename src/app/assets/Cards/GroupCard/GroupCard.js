import React from 'react';
import {
  View,
  Text, StyleSheet, TouchableOpacity, Image
} from 'react-native';
import { ListItem, Icon} from 'react-native-elements';
// import styles from "./GroupCard.styles";
import profileIcon from  '../../icons/profileicon.png'

export default function GroupCard({i, name, subtitleL, subtitleR, onPressFn, isOwner}) {
  return (
    <ListItem key={i} button bottomDivider
      onPress={onPressFn} style={styles.listItem}>
      {/* <Image style={styles.image} source={profileIcon} /> */}
      <Icon
        name='account-circle'
        type='MaterialCommunityIcons'
        color='#66B2B2'
        size={35}
        iconStyle={{ color: '#66B2B2'}}
        onPress={() => navigation.navigate( 'Profile' )}
      />
      <ListItem.Content>
          <ListItem.Title>{name}</ListItem.Title>
          <ListItem.Subtitle  style={{fontSize: 14}}>{subtitleL}</ListItem.Subtitle>
        {
          isOwner && 
          <ListItem.Subtitle  style={{fontSize: 14}}>
            (Admin)
          </ListItem.Subtitle>
        }
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