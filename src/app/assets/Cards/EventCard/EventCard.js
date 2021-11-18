import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';


const EventCard = ({i, name, descSubtitle, timeSubtitle, state, onPressFn, subTextRed}) => {
  const styles = StyleSheet.create({
    descView: {
        fontSize: 14,
        paddingTop: 4, 
        color: "grey"
    },
    timeView: {
      fontSize: 14,
      paddingTop: 4, 
      color: "red"
    },
    titleView: {
        fontSize: 16,
        // paddingBottom: 15,
    },
    iconView: {
        paddingBottom: 20,
    },
    listItem: {
      borderColor: 'lightgrey',
      borderWidth: 0.2,
      backgroundColor: '#F2F2F3',
    }
  });
  
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(liked);
  }, [liked]);
  
  return (
    <View>
      <ListItem key={i} bottomDivider button 
      onPress={onPressFn} style={styles.listItem} subtitleNumberOfLines={2}>
        <ListItem.Content>
            <ListItem.Title style={styles.titleView}>{name}</ListItem.Title>
            <ListItem.Subtitle  style={styles.timeView}>{timeSubtitle}</ListItem.Subtitle>
            <ListItem.Subtitle  style={styles.descView} numberOfLines={2}>{descSubtitle}</ListItem.Subtitle>
        </ListItem.Content>
        
        <View style={{justifyContent: 'center'}}>
            <ListItem.Chevron color={"black"} size={26} iconStyle={styles.iconView}/>
            {liked ? (
              <TouchableOpacity  activeOpacity={0.5} onPress={() => (setLiked(false))}>
                <Icon name='heart' type='font-awesome' color='#F97171'/>
            </TouchableOpacity>
            ) : (
              <TouchableOpacity  activeOpacity={0.5} onPress={() => setLiked(true)}>
            <Icon name='heart-o' type='font-awesome'/>
            </TouchableOpacity>
            )}
        </View>
      </ListItem>
    </View>
  )
}

export default EventCard;