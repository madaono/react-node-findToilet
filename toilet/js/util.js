// ajax
// 获取屏幕宽高
// 获取最小线宽
import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio
  } from 'react-native';

  export default {
      size:{
          height:Dimensions.get('window').height,
          width:Dimensions.get('window').width
      },
      pixel: 1 / PixelRatio.get(),
      get: function(url,sfuntion,ffunction){
        return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          return sfuntion(responseJson);
        })
        .catch((error) => {
            ffunction(error);
        });
      }
  }