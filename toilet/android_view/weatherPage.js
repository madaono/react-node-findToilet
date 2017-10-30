import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';

 export default class weatherPage extends Component{
     render(){
         return (
            <View style={styles.mainView}>
                <Text>weatherPage</Text>
            </View>
         );
     }
 }

 var styles = StyleSheet.create({
     mainView:{
        flex: 1, alignItems: 'center', justifyContent: 'center' 
     }
 })