import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'SymptomEntry',
      });
    }, 1500);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32,}}>Welcome to OneCare!</Text>
      </View>
    );
  }
};