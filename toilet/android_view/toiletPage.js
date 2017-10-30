import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
  } from 'react-native';

import TWebView from './twebview';

 export default class toiletPage extends Component{
     render(){
         return (
            <TWebView url='http://www.acfun.cn' />
         );
     }
 }

 var styles = StyleSheet.create({
     mainView:{
        flex: 1, alignItems: 'center', justifyContent: 'center' 
     }
 })