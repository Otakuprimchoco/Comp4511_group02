import React from 'react';
import {
  View,
} from 'react-native';
import GroupSubNavigation from './GroupSubNavigation.js';

export default function App() {

  // "DiscoverGroups"
  // "MyGroups"
  return (
    <View>
        <GroupSubNavigation startingpage={"MyGroups"}/>
    </View>
  );

}
