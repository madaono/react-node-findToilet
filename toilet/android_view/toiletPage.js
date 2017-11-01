import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
  } from 'react-native';

import TWebView from './twebview';

// let source = (Platform.OS == 'ios')? require('../html/nearby.html'):'file:///android_asset/androidHtml/nearby.html';
let source = 'http://m.amap.com/';
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