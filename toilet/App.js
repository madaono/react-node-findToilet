/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ToiletPage from './android_view/toiletPage';
import ReadPage from './android_view/readPage';
import WeatherPage from './android_view/weatherPage';
import SettingPage from './android_view/settingPage';


const RootTabs = TabNavigator({
  Home: {
    screen: ToiletPage,
    navigationOptions: {
      tabBarLabel: '卫生间',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={'wc'}
          size={26}
          style={{ color: tintColor }}
        />
      ), 
    },
  },
  Read: {
    screen: ReadPage,
    navigationOptions: {
      tabBarLabel: '阅读',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'read' : 'readability'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Weather: {
    screen: WeatherPage,
    navigationOptions: {
      tabBarLabel: '天气',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={'weather-cloudy'}
          size={26}
          style={focused?{color: blue}:{color:white}}
        />
      ),
    },
  },
  Setting: {
    screen: SettingPage,
    navigationOptions: {
      tabBarLabel: '设置',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});


export default class App extends Component<{}> {
  render() {
    return (
      <RootTabs></RootTabs>
    );
  }
}

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
