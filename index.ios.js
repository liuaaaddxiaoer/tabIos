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

var tabDemo = React.createClass({

  render(){
    return(
        <Main/>
        

    );
  },

});

AppRegistry.registerComponent('tabIos',()=>tabDemo);