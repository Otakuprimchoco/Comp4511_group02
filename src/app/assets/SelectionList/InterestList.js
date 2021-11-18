import React from 'react';
import {View, StyleSheet, Button, Alert, Text,} from 'react-native';
import { TagSelect } from 'react-native-tag-select';
import { SearchBar } from 'react-native-elements';
import SearchAndFilter from '../SearchAndFilter/SearchAndFilter';

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
      <View style={styles.container}>
        <View style={styles.titleHeader}>
          <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color:'#008080'}}>Please select at least one interest</Text>
          <Text style={{color: "red"}}> * </Text>
        </View> 
        </View>
        <SearchAndFilter/>
        <View style={styles.tagContainer}>
          <TagSelect
            data={data}
            itemStyle={styles.item}
            itemLabelStyle={styles.label}
            itemStyleSelected={styles.itemSelected}
            itemLabelStyleSelected={styles.labelSelected}

            // used to set the maximum number of selections possible
            max={100}
            ref={(tag) => {
              this.tag = tag;
            }}

            // error message on exceeding the limit
            onMaxError={() => {
              Alert.alert('Please select a maximum of 5 interests');
            }}
          />
        </View>
                {/* Allows to fetch the selected items with an id and label, in a json format */}
                <View style={styles.buttonContainer}>
          <View>
            {/* <Button
            // remove this button later, its only for testing
              title="JSONify selected"
              onPress={() => {
                Alert.alert('Selected items:', JSON.stringify(this.tag.itemsSelected));
              }}
            /> */}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {/* Place the button component here -> name: "Confirm" */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {   // Do not set containers with BG colour, margins from within a component (Cameron)
    // flex: 1,
    // backgroundColor: '#FFF',
    // marginTop: 50,
    // margin: 15,
    // backgroundColor: "white"
  },
  titleHeader: {
    backgroundColor:"#B2D8D8", 
    marginTop: 30, 
    marginBottom: 20,
    padding: 5,
  },
  labelText: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer:{
    backgroundColor: "transparent", 
    marginTop: 40, 
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
    paddingVertical: 10, 
    // marginTop: 10, 
    borderRadius: 10, 
    marginTop: 30
  }, 
  buttonContainer: {
    padding: 1,
    marginTop: 10
  },
  buttonInner: {
    marginBottom: 15,
  },
});