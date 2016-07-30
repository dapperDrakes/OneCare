import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableOpacity
} from 'react-native';

<<<<<<< HEAD
import DoctorEntry from './doctorEntry';
=======
import DoctorEntry from './doctorEntry'
import SymptomEntry from './symptomEntry';
import SplashPage from './splashPage';
import LoginPage from './loginPage';
import MainPage from './mainPage';
>>>>>>> dev

class OneCare extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      "ip": "localhost:3000", // REPLACE WITH YOUR OWN IP ADDRESS (everything before :3000)!
=======
      "ip": "64.72.65.58:3000", // REPLACE WITH YOUR OWN IP ADDRESS (everything before :3000)!
>>>>>>> dev
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
    // This will load splashPage.js on initialize
    return (
      <Navigator
        initialRoute={{id: 'MainPage', name: 'MainPage'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
      // <View style={styles.container}>
      //   <SymptomEntry style={styles.welcome}/>
      //   <Text style={styles.welcome}>
      //     Welcome to OneCare!
      //   </Text>
      //   <Text> {this.state.text}</Text>

      //   <Text style={styles.instructions}>
      //     To get started, edit index.android.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text>
      // </View>
    );
  }
  // Navigator will load each page based on routeId
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage navigator={navigator} />
      );
    }
    if (routeId === 'SymptomEntry') {
      return (
        <SymptomEntry navigator={navigator} />
      );
    }
    if (routeId === 'DoctorEntry') {
      return (
        <DoctorEntry navigator={navigator} />
      )
    }

    return this.noRoute(navigator);
  }

  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

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