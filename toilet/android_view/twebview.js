import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
  } from 'react-native';

export default class TWebView extends Component{
    constructor(props){
        super(props);
        this.state = {
            url : this.props.url,
            isError: false
        }
        this._showError = this._showError.bind(this);
    }

    _showError(){
        this.setState({
            isError: true
        })
    }

    render(){
        return(
            <View style={styles.container}>
                {
                    this.state.isError?
                        <View style={ styles.errInfo }>
                            <Text>网络有问题，请重新刷新</Text>
                        </View>
                    :
                        <WebView
                        source={{uri:this.state.url}}
                        startInLoadingState={true}
                        onError={this._showError} 
                        />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    errInfo:{
        marginTop:100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})