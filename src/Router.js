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
      <BottomTabNav/>
    );
  }
}

const ReceiveStack = createStackNavigator({
  Receive: {
    screen: Receive,
    // navigationOptions: {}
  },
  Process: { screen: Process },
  Profile: { screen: Profile }
}, {
  initialRouteName: 'Receive',
  navigationOptions: {
    // headerStyle: { backgroundColor: '#0057AA' }
  }
});

const DangXLStack = createStackNavigator({
  DangXuly: { screen: DangXuly },
  Process: { screen: Process },
  Profile: { screen: Profile }
}, {
  initialRouteName: 'DangXuly',
  navigationOptions: {
    // headerStyle: { backgroundColor: '#0057AA' }
  }
});

const DaXLStack = createStackNavigator({
  DaXuly: { screen: DangXuly },
  Process: { screen: Process },
  Profile: { screen: Profile }
}, {
  initialRouteName: 'DaXuly',
  navigationOptions: {
    // headerStyle: { backgroundColor: '#0057AA' }
  }
});

const SendStack = createStackNavigator({
  Send: { screen: Send },
  MakeRQ: { screen: MakeRQ },
  Details: { screen: Details }
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

const TopbarTabs = createMaterialTopTabNavigator({
  ReceiveStack: {
    screen: ReceiveStack,
    navigationOptions: { tabBarLabel: 'Phân công' }
  },
  DangXLStack: {
    screen: DangXLStack,
    navigationOptions: { tabBarLabel: 'Đang xử lý' }
  },
  DaXLStack: {
    screen: DaXLStack,
    navigationOptions: { tabBarLabel: 'Đã xử lý' }
  }
}, {
  initialRouteName: 'ReceiveStack',
  order: ['ReceiveStack', 'DangXLStack', 'DaXLStack'],
  tabBarOptions: {
    navigationOptions: {
      tabBarVisible: false,
      // headerStyle: { backgroundColor: '#0057AA' },
      // headerRight: <Icon name="user" color='white' size={24} style={{marginRight: 15}} 
      //               onPress={() => navigation.navigate('Profile')} />,
      // headerLeft: <Image style={{width: 105, height: 35, marginLeft: 25}} source={require('./img/mobi-top.png')} />
    },
    tabStyle: {
      // padding: 20
    },
    style: { backgroundColor: '#0057AA' }
  }
});

export const BottomTabNav = createBottomTabNavigator({
  TopbarTabs: {
    screen: TopbarTabs,
    navigationOptions: {
      tabBarLabel: 'Receive',
      tabBarIcon: ({tintColor}) => (
        <Icon name="briefcase" color={tintColor} size={24} />
      ),
      headerStyle: { backgroundColor: '#0057AA' }
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
    initialRouteName: 'TopbarTabs',
    order: ['TopbarTabs', 'Send', 'Search', 'Setting'],
    navigationOptions: { tabBarVisible: true },
    tabBarOptions: {
      activeTintColor: '#9CDCFF',
      inactiveTintColor: '#fff',
      style: { backgroundColor: '#0057AA' }
    },
    headerMode: 'none'
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