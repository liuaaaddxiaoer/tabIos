import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    ListView,
    AlertIOS,
    TouchableOpacity
} from 'react-native';


// 导入Main.js

var Discover = require('./Discover');
var Home = React.createClass({

    render(){
        return(
            <View
                style={{flex:1,justifyContent: 'center',alignItems: 'center'}}
                >
                <TouchableOpacity
                    onPress={()=>this.props.navigator.push({
                            component:Discover,
                            title:'发现'
                    })}
                >
                    <Text>首页</Text>
                </TouchableOpacity>
            </View>

        );
    },

});
module.exports = Home;