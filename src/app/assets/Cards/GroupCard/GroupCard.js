import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { ListItem} from 'react-native-elements';
import styles from "./GroupCard.styles";

export default function GroupCard({i, name, subtitleL, subtitleR}) {

  return (
    <View>
      <Text>Test</Text>
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <View>
                <ListItem.Title style={styles.titleView}>{name}</ListItem.Title>
              </View>
              <View>
                <ListItem.Subtitle  style={styles.subtitleView}>{subtitleL}</ListItem.Subtitle>
              </View>
            </ListItem.Content>
            <View>
              <ListItem.Chevron color="black" size='26' iconStyle={styles.iconView}/>
              <ListItem.Subtitle  style={styles.subtitleView}>{subtitleR}</ListItem.Subtitle>
            </View>
          </ListItem>
    </View>
  );

}
