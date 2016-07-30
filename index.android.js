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

  Image,
  TextInput, 

  View
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


  // apiGET() {
  //   console.log("APIGET has been called")
  //   fetch("https://api.github.com/users/kentonlin", {method: "GET", body: null, headers: {'accept': 'application/vnd.github.v3+json'}})
  //   .then(function(res){
  //     console.log("RES", res);
  //     return res;
  //   })
  //   .then((responseData) => {
  //     console.log("Search Query -> +++++++++++++++++++++++ " + responseData)
  //   })
  //   .catch(function(err){
  //     console.log("This didn't work because", err);
  //   })
  // }
componentDidMount() {
    console.log("component has mounted");
    this.fuckDan();
    // this.apiGET();
  }

  onPressButtonGET () {
        fetch("https://api.github.com/users/kentonlin", {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
          Alert.alert(
          "GET Response",
          "Search Query -> " + responseData
          )
           console.log("Search Query -> " + responseData)
        })
        .done();
    }

  render() {
    let pic = {
      uri: 'http://www.rxyoursite.com/assets/img/rx-logo.png'
    }; 
    return (
      <View style={styles.container}>
        <SymptomEntry />
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

        <Image source={pic} style={{width: 193, height: 110}}/>

      <UserTextInput/>

      </View>
    );
  }
}

class UserTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Please enter your name' };
  }

  render() {
    return (
      <TextInput 
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8080',
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
AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
