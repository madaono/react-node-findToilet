import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';

 export default class readPage extends Component{
     render(){
         return (
            <View style={styles.mainView}>
                <Text>阅读</Text>
            </View>
         );
     }
 }

 var styles = StyleSheet.create({
     mainView:{
        flex: 1, alignItems: 'center', justifyContent: 'center' 
     }
 })