import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
//import SignUp from './Screens/SignUp';
//import Profile from './Screens/Profile';

export default class App extends Component {
  render() {
    return (
      <AppNavigator />

    );
  }
}

const AppNavigator = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HOME',
    },
  },

  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'LOGIN',
    },
  },

}

);
