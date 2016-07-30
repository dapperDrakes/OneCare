import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default class DoctorEntry extends Component {
  static defaultProps = {
    // return {
      title: 'DoctorEntry',
      userDocs: []
    // };
  }

  render() {
    <Navigator 
      renderScene={this.renderScene.bind(this)}
      navigator={this.props.navigator}
      navigationBar={
          <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
            routeMapper={NavigationBarRouteMapper} />
        }
    />
  }

  renderScene(route, navigator) {
    return (
      <View>
        <Text style={styles.welcome}>{this.props.title}</Text>
        <Text>Enter a new doctor!</Text>
        <ScrollView>
          <Text>Name: </Text><TextInput />
          <Text>Specialty: </Text><TextInput />
          <Text>Phone: </Text><TextInput />
          <Text>Fax: </Text><TextInput />
          <Text>Email: </Text><TextInput />
          <Text>Address: </Text><TextInput />
        </ScrollView>
        <ScrollView>
          <Text>Current Doctors:</Text>
        </ScrollView>
      </View>
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
       <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
        onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10}}>Go Back</Text>
      </TouchableOpacity>
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
