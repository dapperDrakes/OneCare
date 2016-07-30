/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DoctorEntry from './doctorEntry';

class OneCare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "ip": "localhost:3000", // REPLACE WITH YOUR OWN IP ADDRESS (everything before :3000)!
      "text": "before API Call"};
  }
  fuckDan() {
    var obj = {
      method: 'GET',
      body: null,
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch('http://'+ this.state.ip + '/fuckDan', obj)
    .then(function(res) {
      return res.json();
     })
     .then(function(parsed){
       this.setState({"text": parsed.message});
     }.bind(this))
    .catch(function(err){
      console.log("data not fetched", err);
    })

  }
  componentDidMount() {
    console.log("component has mounted");
    this.fuckDan();
  }
  render() {
    return (
      <View style={styles.container}>
        <DoctorEntry />
        <Text style={styles.welcome}>
          Welcome to the Thunder Dome!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('OneCare', () => OneCare);
