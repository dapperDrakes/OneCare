import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class SymptomEntry extends Component {
  static defaultProps = {
    title: 'SymptomEntry'
  }

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
        // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ScrollView>
          <Text style={{fontSize: 150, backgroundColor: '#48E521'}}>This is the {this.props.title} page</Text>
        </ScrollView>

          // <TouchableHighlight style={{backgroundColor: 'yellow', padding: 10}}
          //   onPress={this.gotoDoctorEntryPage.bind(this)}>
          //   <Text style={{backgroundColor: 'yellow', color: 'green'}}>Enter Doctors</Text>
          // </TouchableHighlight>
        // </View>
      );
    }

  //   gotoDoctorEntryPage() {
  //     this.props.navigator.push({
  //       id: 'DoctorEntry',
  //       name: 'DoctorEntry'
  //     });
  //   }
  // }
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
  // static defaultProps = {
  //     title: 'SymptomEntry'
  // }

  // render() {
  //   return (
  //     <ScrollView>
  //       <Text style={{fontSize: 50}}>This is the {this.props.title} page</Text>
  //     </ScrollView>
  //   );
  // }
};