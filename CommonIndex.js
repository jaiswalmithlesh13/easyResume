import React, {Component} from 'react';
import {StackNavigator, Header} from 'react-navigation';
import {View,Text,Stylesheet} from 'react-native';

import Routes from './Routes';

const HomeView = require('./HomeView');
const LoginView = require('./LoginView');

const routeConfigs = {
    ...Routes,
};

const screenWithoutHeaders = [
                              routeConfigs.HomeView.screen.name];

const _headerForNavigation = function(props) {
    const state = props.navigation.state;
      const options = props.getScreenDetails(props.scene).options;
if (props.scene.index === 0 || screenWithoutHeaders.indexOf(state.routes[state.index].routeName) >= 0) {
    return null;
  } else {
          return null;

    // return (<Header {...props} />);
      //<View style={{height:46, marginTop: 20}} >{children}<Text>Here goes my header component</Text></View>);
  }
}

const stackNavigatorConfig = {
initialRouteName:'HomeView',
initialRouteParams:{},
paths:{},
navigationOptions:{
    title:'Title',
    header:_headerForNavigation,
},
mode:'card',
headerMode:'float',

};
const AppNavigator = StackNavigator(routeConfigs,stackNavigatorConfig);
export default () => <AppNavigator screenProps = {{tintColor:'blue', routeConfigs:routeConfigs, stackNavigatorConfig:stackNavigatorConfig}}/>
console.ignoredYellowBox = ['Warning: BackAndroid', 'Remote debugger'];
