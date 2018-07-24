import React from 'react';
import {Image, View, StyleSheet} from 'react-native'
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

import Receive from "./ReceiveRQ/Receive";
import Send from "./SendRQ/Send";
import Search from "./Search/Search";
import Setting from "./Setting/Setting";

import khung from './LayoutStyle';

console.disableYellowBox = true;

export default class Router extends React.Component{
  render() {
    return(
      <BottomTabNav/>
    );
  }
}

const ReceiveStack = createStackNavigator({
  Receive: {
    screen: Receive,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0057AA',
      },
      // title: 'Receive',
      // headerTintColor: '#000',
      // headerTitleStyle: {
      //   fontWeight: '200',
      //   color: '#2c38ff',
      //   textAlign: 'center',
      //   flex: 1,
      // },
      headerRight: <Icon name="user" color='white' size={24} style={{marginRight: 15}} />,
      headerLeft: <Image style={{width: 96, height: 35, marginLeft: 25}} source={require('./img/mobi-top.png')} />
    }
  }
});

const SendStack = createStackNavigator({
  Send: {
    screen: Send,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0057AA',
      },
      headerRight: <Icon name="paper-plane" color='white' size={24} style={{marginRight: 15}} />,
      headerLeft: <Image style={{width: 96, height: 35, marginLeft: 25}} source={require('./img/mobi-top.png')} />
    }
  }
});

const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0057AA',
      },
    }
  }
});

const SettingStack = createStackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0057AA',
      },
    }
  }
});

export const BottomTabNav = createBottomTabNavigator({
  Receive: {
    screen: ReceiveStack,
    navigationOptions: {
      tabBarLabel: 'Receive',
      tabBarIcon: ({tintColor}) => (
        <Icon name="briefcase" color={tintColor} size={24} />
      )
    }
  },
  Send: {
    screen: SendStack,
    navigationOptions: {
      tabBarLabel: 'Send',
      tabBarIcon: ({tintColor}) => (
        <Icon name="send" color={tintColor} size={24} />
      )
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => (
        <Icon name="search" color={tintColor} size={24} />
      )
    }
  },
  Setting: {
    screen: SettingStack,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({tintColor}) => (
        <Icon name="cog" color={tintColor} size={24} />
      )
    }
  }
}, {
    initialRouteName: 'Receive',
    order: ['Receive', 'Send', 'Search', 'Setting'],
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'grey'
    }
});