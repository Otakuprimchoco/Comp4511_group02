import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import styles from "./UserList.styles";

export default function UserList({i, name, avatar_url, followed}) {

  const [following, setFollowing] = useState(followed);

  useEffect(() => {
    setFollowing(following);
  }, [following]);

  return (
    <View>
      <ListItem key={i} bottomDivider>
      <Avatar size="medium" rounded source={{uri: avatar_url}} />
      <ListItem.Content>
        <View>
          <ListItem.Title style={styles.titleView}>{name}</ListItem.Title>
        </View>
      </ListItem.Content>
      <View>
        {following ? (
        <TouchableOpacity style={styles.followView} onPress={() => (setFollowing(false))}>
          <Icon name='user-times' type='font-awesome' color='#008080'/>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity  style={styles.followView} onPress={() => (setFollowing(true))}>
          <Icon name='user-plus' type='font-awesome'  color='#ffffff'/>
        </TouchableOpacity>
      )}
      </View>
      
    </ListItem>
    </View>
  );

}
