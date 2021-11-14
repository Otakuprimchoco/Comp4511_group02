import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const SearchAndFilter = () => {

const [searchQuery, setSearchQuery] = React.useState('');

const onChangeSearch = query => setSearchQuery(query);

return (
  <View style={styles.container}>
    <View style={{flexDirection:"row"}}>
        <Searchbar
            style={styles.search}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
        <Icon style={styles.FilterIcon} name='filter' type='font-awesome' color='black'/>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  // flex: 1,
  // justifyContent: 'center',
  alignItems: 'center',
},
search: {
    borderRadius: 20, 
    width: "90%", 
    height: 35, 
    marginTop: 20, 
    marginBottom: 20
},
FilterIcon: {
    marginTop: 25,
    marginLeft: 10
},
});

export default SearchAndFilter;
