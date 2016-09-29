/**
 * Created by liuxiaoer on 16/9/28.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    ListView,
    AlertIOS
} from 'react-native';


// 导入Main.js
var Main = require('./Main/Main');

var Mine = React.createClass({

    render(){
        return(
            <View
                style={{flex:1,justifyContent: 'center',alignItems: 'center'}}
            >
                <Text>我的</Text>
            </View>

        );
    },

});
module.exports = Mine;