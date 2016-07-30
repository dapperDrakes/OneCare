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
  ScrollView
} from 'react-native';

export default class SymptomEntry extends Component {
  static defaultProps = {
    // return {
      title: 'FUCK YOU HARISH'
    // };
  }

  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 50}}>This is the {this.props.title} page</Text>
      </ScrollView>
    );
  }
}