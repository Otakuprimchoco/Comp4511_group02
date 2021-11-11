import { render } from 'react-dom';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoadService from '../../services/LoadService';

export default class SplashScreen {
  state = {
    loaded: false
  }

  constructor() {
    super();
    LoadService.load(v => this.setState({loaded: true}));
  }

    render() {
        return (
        <View style={styles.container}>
            {this.state.loaded ? (
            <Text>Open up App.js to start working on your app!</Text>
            ) : (
            <Image style={{width: 100, height: 100,}} source={require('../../assets/logos/logo.png')} />
            )}
        </View>
        );
    }
}