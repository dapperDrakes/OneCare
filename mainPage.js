import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class MainPage extends Component {
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
        navigationBar={
          <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
            routeMapper={NavigationBarRouteMapper} />
        } />
    );
  }

  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight style={{backgroundColor: 'yellow', padding: 10}}
          onPress={this.gotoSymptomEntryPage.bind(this)}>
          <Text style={{backgroundColor: 'yellow', color: 'green'}}>Enter Symptoms</Text>
        </TouchableHighlight>
      </View>
    );
  }

  gotoSymptomEntryPage() {
    this.props.navigator.push({
      id: 'SymptomEntry',
      name: 'SymptomEntry'
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
        onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10}}>Go Back</Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>Main Page</Text>
      </TouchableOpacity>
    );
  }
};