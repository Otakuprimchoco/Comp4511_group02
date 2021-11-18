import React from 'react';
import {View, StyleSheet, Button, Alert, Text, ScrollView} from 'react-native';
import { TagSelect } from 'react-native-tag-select';
import { SearchBar } from 'react-native-elements';

export default class InterestList extends React.Component {

  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {

    const { search } = this.state;
    
    // Change this data based on the page
    const data = [
      { id: 1,  label: 'Engineering' },
      { id: 2,  label: 'FrontEnd Development' },
      { id: 3,  label: 'Business Studies' },
      { id: 4,  label: 'Backend Studies' },
      { id: 5,  label: 'Software' },
      { id: 6,  label: 'Law Studies' },
      { id: 7,  label: 'Architecture' },
      { id: 8,  label: 'Media Marketing' },
      { id: 9,  label: 'Sales' },
      { id: 10, label: 'Leadership Development' },
      { id: 11, label: 'Arts & Design' },
      { id: 12, label: 'Technical Drawing' },
      { id: 13, label: 'Mechatronic Engineering' },
      { id: 14, label: 'Medicine' },
      { id: 15, label: 'Data Science' },
      { id: 16, label: 'Paleontology' },
      { id: 17, label: 'History & Civic Studies' },
      { id: 18, label: 'Science' },
      { id: 19, label: 'Mathematics' },
    ];

    return (
      <View>
        <SearchBar
          lightTheme 
          round
          showCancel
          containerStyle={styles.searchContainer}
          placeholder="Search..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <ScrollView style={styles.tagContainer}>
          <TagSelect
            data={data}
            itemStyle={styles.item}
            itemLabelStyle={styles.label}
            itemStyleSelected={styles.itemSelected}
            itemLabelStyleSelected={styles.labelSelected}

            // used to set the maximum number of selections possible
            max={5}
            min={1}
            ref={(tag) => {
              this.tag = tag;
            }}

            // error message on exceeding the limit
            onMaxError={() => {
              Alert.alert('Please select a maximum of 5 interests');
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  labelText: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer:{
    backgroundColor: "transparent",
    borderBottomWidth: 0, 
    borderTopWidth: 0
  },
  item: {
    borderWidth: 0.5,
    borderColor: '#333',    
    backgroundColor: '#FFF',
  },
  itemSelected: {
    backgroundColor: '#B2D8D8',
  },
  label: {
    color: '#333'
  },
  labelSelected: {
    color: 'white',
  },
  tagContainer: { 
    backgroundColor: "#D3D3D3", 
    paddingLeft: 10, 
    paddingTop: 10, 
    marginTop: 30, 
    borderRadius: 10
  }, 
  buttonContainer: {
    padding: 1,
  },
  buttonInner: {
    marginBottom: 15,
  },
});