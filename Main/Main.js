import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    ListView,
    Platform,
    Navigator
} from 'react-native';

// 引入底部的tab
import TabNavigator from 'react-native-tab-navigator';


import  React,{Component} from 'react';
var Home = require('./Home');
var imageWH = 25;

var demo = React.createClass({
    getInitialState(){
      return{
          selectedItem:'Home'
      }
    },
    render(){
        return(

            <TabNavigator
                hidesTabTouch = {false}

            >
                <TabNavigator.Item
                    title = {'首页'}
                    renderIcon = {()=><Image
                        source = {require('../images/home.png')}
                        style = {{width:imageWH,height:imageWH}}
                    />}
                    renderSelectedIcon = {()=><Image
                    source = {require('../images/home_selected.png')}
                    style = {{width:imageWH,height:imageWH}}
                    />}
                    badgeText = {3}
                    renderBadge = {()=><Text style={{position:'absolute',left:imageWH,
                    backgroundColor: 'red',
                    width: 15,height:15,borderRadius:7.5,borderWidth:0.5,
                    textAlign:'center',lineHeight: 15,borderColor:'red',
                    color:'white'
                    }}>1</Text>}
                    selectedTitleStyle = {{fontSize:11,color:'#197eee'}}
                    titleStyle = {{fontSize:11,color:'#999'}}
                    tabStyle = {{opacity: 1.0}}
                    allowFontScaling = {true}
                    selected = {this.state.selectedItem == 'Home'}
                    onPress = {()=>this.setState({selectedItem:'Home'})}
                >
                    {/*导航栏*/}
                    <Navigator
                        initialRoute={
                            {
                                component:Home,
                                title:'首页'
                            }
                        }
                        configureScene = {()=>Navigator.SceneConfigs.HorizontalSwipeJumpFromRight}
                        renderScene = {(route,navigator)=><route.component
                         navigator={navigator}/>}
                        navigationBar={
                           <Navigator.NavigationBar
                            routeMapper={{
                               LeftButton: (route, navigator, index, navState) =>
                                { return (<Text>Cancel</Text>); },
                               RightButton: (route, navigator, index, navState) =>
                                 { return (<Text>Done</Text>); },
                               Title: (route, navigator, index, navState) =>
                                 { return (<Text>Awesome Nav Bar</Text>); },
                             }}
                             style={{backgroundColor: 'red'}}
                           />
                        }
                    />

                </TabNavigator.Item>

                <TabNavigator.Item
                    title = {'周围'}
                    renderIcon = {()=><Image
                        source = {require('../images/discover.png')}
                        style = {{width:imageWH,height:imageWH}}
                    />}
                    renderSelectedIcon = {()=><Image
                    source = {require('../images/discoverS.png')}
                    style = {{width:imageWH,height:imageWH}}
                    />}
                    badgeText = {3}
                    renderBadge = {()=><Text style={{position:'absolute',left:30,
                    backgroundColor: 'red',
                    width: 15,height:15,borderRadius:7.5,borderWidth:0.5,
                    textAlign:'center',lineHeight: 15,borderColor:'red',
                    overflow:'hidden', color:'white'
                    }}>1</Text>}
                    selectedTitleStyle = {{fontSize:11,color:'#197eee'}}
                    titleStyle = {{fontSize:11,color:'#999'}}
                    tabStyle = {{opacity: 1.0}}
                    allowFontScaling = {true}
                    selected = {this.state.selectedItem == 'Discover'}
                    onPress = {()=>this.setState({selectedItem:'Discover'})}
                >
                    {/*内容*/}
                    <Text>111</Text>

                </TabNavigator.Item>


                <TabNavigator.Item
                    // title = {''}
                    renderIcon = {()=><Image
                        source = {require('../images/publishService.png')}
                        style = {{width:30,height:30,position:'absolute',top:-27,left:-10}}
                    />}
                    renderSelectedIcon = {()=><Image
                    source = {require('../images/publishService.png')}
                    style = {{width:30,height:30,position:'absolute',top:-27,left:-10}}
                    />}
                    // badgeText = {3}
                    // renderBadge = {()=><Text style={{position:'absolute',left:30,
                    // backgroundColor: 'red',
                    // width: 30,height:30,borderRadius:15,borderWidth:0.5,
                    // textAlign:'center',lineHeight: 30,borderColor:'red',
                    // overflow:'hidden',
                    // }}>99+</Text>}
                    selectedTitleStyle = {{fontSize:11,color:'#197eee'}}
                    titleStyle = {{fontSize:11,color:'#999'}}
                    tabStyle = {{opacity: 1.0,position:'relative'}}
                    allowFontScaling = {true}
                    selected = {this.state.selectedItem == 'publish'}
                    onPress = {()=>this.setState({selectedItem:'publish'})}
                >
                    {/*内容*/}
                    <Text>111</Text>

                </TabNavigator.Item>

                <TabNavigator.Item
                    title = {'日程'}
                    renderIcon = {()=><Image
                        source = {require('../images/calendarO.png')}
                        style = {{width:imageWH,height:imageWH}}
                    />}
                    renderSelectedIcon = {()=><Image
                    source = {require('../images/calendarS.png')}
                    style = {{width:imageWH,height:imageWH}}
                    />}
                    badgeText = {3}
                    renderBadge = {()=><Text style={{position:'absolute',left:30,
                    backgroundColor: 'red',
                    width: 15,height:15,borderRadius:7.5,borderWidth:0.5,
                    textAlign:'center',lineHeight: 15,borderColor:'red',
                    overflow:'hidden',color:'white'
                    }}>1</Text>}
                    selectedTitleStyle = {{fontSize:11,color:'#197eee'}}
                    titleStyle = {{fontSize:11,color:'#999'}}
                    tabStyle = {{opacity: 1.0}}
                    allowFontScaling = {true}
                    selected = {this.state.selectedItem == 'calendar'}
                    onPress = {()=>this.setState({selectedItem:'calendar'})}
                >
                    {/*内容*/}
                    <Text>111</Text>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title = {'我的'}
                    renderIcon = {()=><Image
                        source = {require('../images/mineImage.png')}
                        style = {{width:imageWH,height:imageWH}}
                    />}
                    renderSelectedIcon = {()=><Image
                    source = {require('../images/mineS.png')}
                    style = {{width:imageWH,height:imageWH}}
                    />}
                    badgeText = {3}
                    renderBadge = {()=><Text style={{position:'absolute',left:30,
                    backgroundColor: 'red',
                    width: 15,height:15,borderRadius:7.5,borderWidth:0.5,
                    textAlign:'center',lineHeight: 15,borderColor:'red',
                    overflow:'hidden',color:'white'
                    }}>1</Text>}
                    selectedTitleStyle = {{fontSize:11,color:'#197eee'}}
                    titleStyle = {{fontSize:11,color:'#999'}}
                    tabStyle = {{opacity: 1.0}}
                    allowFontScaling = {true}ine
                    selected = {this.state.selectedItem == 'Mine'}
                    onPress = {()=>this.setState({selectedItem:'Mine'})}
                >
                    {/*内容*/}
                    <Text>111</Text>
                </TabNavigator.Item>

            </TabNavigator>
        );
    },
    
});

module.exports = demo ;