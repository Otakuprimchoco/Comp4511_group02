import React from 'react';
import {View, StyleSheet, Button, Alert, Text,} from 'react-native';
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
      { id: 1,  label: 'Technology' },
      { id: 2,  label: 'Interest/goal 2' },
      { id: 3,  label: 'Interest/Goal  3' },
      { id: 4,  label: 'Interest 4' },
      { id: 5,  label: 'Interest/Goal 5' },
      { id: 6,  label: 'Frontend dev' },
      { id: 7,  label: 'Interest 7' },
      { id: 8,  label: 'Interest/Career Goal 8' },
      { id: 9,  label: 'Interest 9' },
      { id: 10, label: 'Interest/Career 10' },
      { id: 11, label: 'IInternship' },
      { id: 12, label: 'Technology' },
      { id: 13, label: 'Interest/goal 2' },
      { id: 14, label: 'Interest/Goal  3' },
      { id: 15, label: 'Interest 4' },
      { id: 16, label: 'Interest/Goal 5' },
      { id: 17, label: 'Frontend dev' },
      { id: 18, label: 'Interest 7' },
      { id: 19, label: 'Interest/Career Goal 8' },
      { id: 20, label: 'Interest 9' },
    ];

    return (
      <View style={styles.container}>
        <View style={styles.titleHeader}>
          <Text style={styles.labelText}>
            Please select atleast one interest 
            <Text style={{color: "red"}}> * </Text>
          </Text>
        </View>
        <SearchBar
          lightTheme 
          round
          showCancel
          containerStyle={styles.searchContainer}
          placeholder="Search..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <View style={styles.tagContainer}>
          <TagSelect
            data={data}
            itemStyle={styles.item}
            itemLabelStyle={styles.label}
            itemStyleSelected={styles.itemSelected}
            itemLabelStyleSelected={styles.labelSelected}

            // used to set the maximum number of selections possible
            max={5}
            ref={(tag) => {
              this.tag = tag;
            }}

            // error message on exceeding the limit
            onMaxError={() => {
              Alert.alert('Please select a maximum of 5 interests');
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          {/* Place the button component here -> name: "Confirm" */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFF',
    marginTop: 50,
    // margin: 15,
    // backgroundColor: "white"
  },
  titleHeader: {
    backgroundColor:"#B2D8D8", 
    marginTop: 0, 
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
    paddingTop: 10, 
    marginTop: 30, 
    marginLeft: 10,
    borderRadius: 10
  }
});