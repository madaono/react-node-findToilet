import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';

 export default class toiletPage extends Component{
     render(){
         return (
            <View style={styles.mainView}>
                <Text>卫生间页面</Text>
            </View>
         );
     }
 }

 var styles = StyleSheet.create({
     mainView:{
        flex: 1, alignItems: 'center', justifyContent: 'center' 
     }
 })