import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import styles from "./PastEventCard.styles";

const PastEventCard = ({i, name, subtitle, state}) => {

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(liked);
  }, [liked]);
  
  return (
    <View>
      <ListItem key={i} bottomDivider button>
        <ListItem.Content>
            <ListItem.Title style={styles.titleView}>{name}</ListItem.Title>
            <TouchableOpacity>
                <ListItem.Subtitle  style={styles.subtitleView}>{subtitle}</ListItem.Subtitle>
            </TouchableOpacity>
        </ListItem.Content>
        
        <View style={{justifyContent: 'center'}}>
        <TouchableOpacity>
            <ListItem.Chevron color={"black"} size={26} iconStyle={styles.iconView}/>
        </TouchableOpacity>
        </View>
      </ListItem>
    </View>
  )
}

export default PastEventCard;