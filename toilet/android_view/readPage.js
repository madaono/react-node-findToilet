import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
  } from 'react-native';

import Category from './read/category'
import List from './read/list'
import Recommend from './read/recommend'
import Search from './read/search'
import Topic from './read/topic'

import Util from '../js/util'

class Hr extends Component{
    render(){
        return(
            <View>
                <View style={styles.hr}></View>
            </View>
        )
    }
}

 export default class readPage extends Component{
     constructor(){
         super();
         this.state = {
             isShow: false
         };
     }
     render(){
         return (
            <View style={styles.mainView}>
               <Search/>
               <Hr/>
               {
                   this.state.isShow?
                   <ScrollView>     
                   <Topic/>
                   <Recommend/>
                   <Category/>
                   <Recommend/>
                  </ScrollView>
                  :null
               }
            </View>
         );
     }

     componentDidMount(){
         this.setState({
             isShow: true
         })
     }
 }

 var styles = StyleSheet.create({ 
     mainView:{
        flex: 1, alignItems: 'center', justifyContent: 'center' 
     },
     hr:{
        borderColor: '#F0F0F0',
        borderWidth: Util.pixel,
        marginTop:10
     }
 })