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
  View,
  ScrollView,
  Navigator
} from 'react-native';

import SymptomEntry from './symptomEntry';

class OneCare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "ip": "10.224.144.22:3000", // REPLACE WITH YOUR OWN IP ADDRESS (everything before :3000)!
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
<<<<<<< 05ae50892fc0ff187a9886b8495d3e14ceff14e9
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to OneCare!
        </Text>
        <Text> {this.state.text}</Text>

        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
=======
      <Navigator
        initialRoute={{ title: 'SymptomEntry Scene', index: 0 }}
        renderScene={(route, navigator) => {
          <View>
            <SymptomEntry title={route.title} />
            <Text style={styles.welcome}>
              Welcome to One Care!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.android.js
            </Text>
            <Text style={styles.instructions}>
              Double tap R on your keyboard to reload,{'\n'}
              Shake or press menu button for dev menu
            </Text>
          </View>
        }}/>

>>>>>>> got scene to render
    );
  }
}
        /*// <View style={styles.container}>
        // </View>*/

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
