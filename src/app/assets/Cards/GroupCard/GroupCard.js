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
      onPress={onPressFn}>
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
          <ListItem.Subtitle  style={{fontSize: 12}}>{subtitleL}</ListItem.Subtitle>
        {
          isOwner && 
          <ListItem.Subtitle  style={{fontSize: 12}}>
            (Admin)
          </ListItem.Subtitle>
        }
      </ListItem.Content>
      <View style={{justifyContent: 'center'}}>
        <ListItem.Chevron style={{paddingBottom: 5}}/>
        <ListItem.Subtitle  style={{fontSize: 12}}>{}{subtitleR}</ListItem.Subtitle>
      </View>
    </ListItem>
  );

}

const styles = StyleSheet.create({
  image: {
    width: 30, 
    height: 30,
  },
  });