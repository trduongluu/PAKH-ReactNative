import React from 'react';
import {Image, View, StyleSheet} from 'react-native'
import {createBottomTabNavigator, createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Receive from './ReceiveRQ/Receive';
import Send from './SendRQ/Send';
import Search from './Search/Search';
import Setting from "./Setting/Setting";
import Process from './ReceiveRQ/Process';
import Profile from './Setting/Profile';
import MakeRQ from './SendRQ/MakeRQ';
import Details from './Search/Details';
import Results from './Search/Results';
import Password from './Setting/Password';
import Login from './Login/Login';
import PhanCong from './ReceiveRQ/PhanCong';
import DangXuly from './ReceiveRQ/DangXuly';
import DaXuly from './ReceiveRQ/DaXuly';

console.disableYellowBox = true;

export default class Router extends React.Component{
  render() {
    return(
      <LoginStack/>
    );
  }
}

const TopbarTabs = createMaterialTopTabNavigator({
  PhanCong: {
    screen: PhanCong,
    navigationOptions: { tabBarLabel: 'Phân công' }
  },
  DangXuly: {
    screen: DangXuly,
    navigationOptions: { tabBarLabel: 'Đang xử lý' }
  },
  DaXuly: {
    screen: DaXuly,
    navigationOptions: { tabBarLabel: 'Đã xử lí' }
  }
}, {
  initialRouteName: 'PhanCong',
  order: ['PhanCong', 'DangXuly', 'DaXuly'],
  tabBarOptions: {
    navigationOptions: { tabBarVisible: true },
    style: { backgroundColor: '#0057AA' }
  }
});

const ReceiveStack = createStackNavigator({
  Receive: {
    screen: Receive,
    // navigationOptions: {}
  },
  Process: { screen: Process },
  Profile: { screen: Profile },
  TopbarTabs: { screen: TopbarTabs }
});

const SendStack = createStackNavigator({
  Send: { screen: Send },
  MakeRQ: { screen: MakeRQ },
  Details: { screen: Details },
  TopbarTabs: { screen: TopbarTabs }
});

const SearchStack = createStackNavigator({
  Search: { screen: Search },
  Results: { screen: Results },
});

const SettingStack = createStackNavigator({
  Setting: { screen: Setting },
  Profile: { screen: Profile },
  Password: { screen: Password },
  Login: { screen: Login }
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
    navigationOptions: { tabBarVisible: true },
    tabBarOptions: {
      activeTintColor: '#9CDCFF',
      inactiveTintColor: '#fff',
      style: { backgroundColor: '#0057AA' }
    }
});

export const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
  },
  BottomTabNav: { screen: BottomTabNav }
}, {
  mode: 'modal',
  headerMode: 'none'
});