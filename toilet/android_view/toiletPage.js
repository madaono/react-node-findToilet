import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
  } from 'react-native';

import TWebView from './twebview';

let source = (Platform.OS == 'ios')? require('../html/nearby.html'):'file:///android_assets/nearby.html';
 export default class toiletPage extends Component{
     render(){
         return (
            <TWebView url={source} />
         );
     }
 }

 var styles = StyleSheet.create({
     mainView:{
        flex: 1, alignItems: 'center', justifyContent: 'center' 
     }
 })