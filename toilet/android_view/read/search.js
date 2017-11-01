import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput 
  } from 'react-native';

import Util from '../../js/util'

 export default class search extends Component{
     constructor(props){
        super();
        this.state = { text: 'Search it' };
     }
     render(){
         return (
             <View style={styles.container}>
                <TextInput
                onChangeText={(text) => this.setState({text})}
                style={styles.search_input}
                // value={this.state.text}
                placeholder='搜索'
                />
             </View>
         );
     }
 }

 var styles = StyleSheet.create({
     container:{
         paddingLeft:10,
         paddingRight:10,
         marginTop:20,
         flex:1
     },
     search_input:{
        height:45,
        width:300,
        borderWidth:Util.pixel,
        paddingLeft:10,
        borderColor: '#EEE',
        borderRadius:3,
        fontSize:15,
        paddingTop:10
     }
 })