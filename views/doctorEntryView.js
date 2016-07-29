import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DoctorEntryView extends Component {
  static defaultProps = {
    title: "Dr. PillMe"
  };

  render() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}