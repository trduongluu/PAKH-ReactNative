import React from 'react';
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

import Receive from "./src/ReceiveRQ/Receive";
import Send from "./src/SendRQ/Send";
import Search from "./src/Search/Search";
import Setting from "./src/Setting/Setting";

console.disableYellowBox = true;

export default class App extends React.Component{
  render() {
    return(
      <BottomTabNav/>
    );
  }
}

const ReceiveStack = createStackNavigator({
  Receive: {
    screen: Receive
  }
}, {
  navigationOptions: {
    headerTitle: 'Received',
    headerTitleStyle: {
      textAlign: 'center',
    }
  }
});

const SendStack = createStackNavigator({
  Send: {
    screen: Send,
    navigationOptions: {
      title: 'Sent'
    }
  }
});

const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search'
    }
  }
});

const SettingStack = createStackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: {
      title: 'Setting'
    }
  }
});

const BottomTabNav = createBottomTabNavigator({
  Receive: {
    screen: ReceiveStack,
    navigationOptions: {
      tabBarLabel: 'Receive',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-book" color={tintColor} size={24} />
      )
    }
  },
  Send: {
    screen: SendStack,
    navigationOptions: {
      tabBarLabel: 'Send',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-send" color={tintColor} size={24} />
      )
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Setting: {
    screen: SettingStack,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});