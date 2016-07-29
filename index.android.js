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
  render() {
    return (
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
