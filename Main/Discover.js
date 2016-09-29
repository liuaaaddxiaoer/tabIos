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
    AlertIOS,
    Navigator
} from 'react-native';


var Discover = React.createClass({

    render(){
        return(
        <Navigator
                   initialRoute={
                           {
                                // component:Home,
                                title:'首页'
                            }
                        }
            configureScene = {()=>Navigator.SceneConfigs.HorizontalSwipeJumpFromRight}
            renderScene = {(route,navigator)=> <Text>eeee</Text>}
            navigationBar={
                           <Navigator.NavigationBar
                            routeMapper={{
                               LeftButton: (route, navigator, index, navState) =>
                                { return (<Text>返回</Text>); },
                               RightButton: (route, navigator, index, navState) =>
                                 { return (<Text>Done</Text>); },
                               Title: (route, navigator, index, navState) =>
                                 { return (<Text>Awesome Nav Bar</Text>); },
                             }}
                             style={{backgroundColor: 'red'}}
                           />
                        }
        />




        );
    },

});
module.exports = Discover;