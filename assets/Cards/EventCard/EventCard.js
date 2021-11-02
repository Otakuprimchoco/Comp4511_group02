import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import styles from "./EventCard.styles";

const EventCard = ({i, name, subtitle, state}) => {

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(liked);
  }, [liked]);
  
  return (
    <View>
        <ListItem key={i} bottomDivider>
        <ListItem.Content>
            <View>
            <ListItem.Title style={styles.titleView}>{name}</ListItem.Title>
            </View>
            <View>
            <ListItem.Subtitle  style={styles.subtitleView}>{subtitle}</ListItem.Subtitle>
            </View>
        </ListItem.Content>
        <View>
            <ListItem.Chevron color="black" size='26' iconStyle={styles.iconView}/>
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