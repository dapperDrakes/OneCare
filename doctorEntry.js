import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class DoctorEntry extends Component {
  static defaultProps = {
    // return {
      title: 'DoctorEntry',
      userDocs: []
    // };
  }

  // getUserDocs() {
  //   var obj = {
  //     method: 'GET',
  //     body: null,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   }
  //   fetch("this.props.ip")
  // }

  render() {
    return (
      <View>
        <Text style={styles.welcome}>{this.props.title}</Text>
        <Text>Enter a new doctor!</Text>
        <ScrollView>
          <Text>Name: </Text><TextInput />
        </ScrollView>
      </View>
    );
  }
}
