import React from 'react';
import {Image, View, StyleSheet, StatusBar} from 'react-native'
import {createBottomTabNavigator, createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Receive from './ReceiveRQ/Receive';
import Send from './SendRQ/Send';
import DangXL from './SendRQ/DangXL'
import DaXL from './SendRQ/DaXL'
import Search from './Search/Search';
import Setting from "./Setting/Setting";
import Process from './ReceiveRQ/Process';
import Profile from './Setting/Profile';
import MakeRQ from './SendRQ/MakeRQ';
import Details from './Search/Details';
import Results from './Search/Results';
import Password from './Setting/Password';
import Login from './Login/Login';
import DangXuly from './ReceiveRQ/DangXuly';
import DaXuly from './ReceiveRQ/DaXuly';
import PhanCong from './ReceiveRQ/PhanCong';
import History from './ReceiveRQ/History';

console.disableYellowBox = true;

// Config header màn hình trong stack
const headerConfig = {
    headerTintColor: 'white',
    headerTitleStyle: { flex: 1, textAlign: 'center', alignItems: 'center' }
}

// Start screen here
export default class Router extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar hidden/>
                <LoginStack/>
            </View>
        );
    }
}

// Cụm search screens
const SearchStack = createStackNavigator({
    Search: { screen: Search },
    Results: { screen: Results, navigationOptions: headerConfig }
});

// Cụm setting screens
const SettingStack = createStackNavigator({
    Setting: { screen: Setting },
    Profile: { screen: Profile, navigationOptions: headerConfig },
    Password: { screen: Password, navigationOptions: headerConfig },
    Logout: { screen: Login }
});

// Topbar trong tab Receive
const ReceiveTopbar = createMaterialTopTabNavigator({
    Receive: {
        screen: Receive,
        navigationOptions: { tabBarLabel: 'Phân công' }
    },
    DangXuly: {
        screen: DangXuly,
        navigationOptions: { tabBarLabel: 'Đang xử lý' }
    },
    DaXuly: {
        screen: DaXuly,
        navigationOptions: { tabBarLabel: 'Đã xử lý' }
    }
}, {
    initialRouteName: 'Receive',
    order: ['Receive', 'DangXuly', 'DaXuly'],
    tabBarOptions: {
        style: { backgroundColor: '#0057AA' }
    }
});

// Cụm receive screens
const ReceiveStack = createStackNavigator({
    ReceiveTopbar: {
        screen: ReceiveTopbar,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: '#0057AA' },
            headerRight: <Icon name="user" color='white' size={24} style={{marginRight: 15}}
                               onPress={() => navigation.navigate('Profile')} />,
            headerLeft: <Image style={{width: 105, height: 35, marginLeft: 25}} source={require('./img/mobi-top.png')} />
        })
    },
    Process: { screen: Process, navigationOptions: headerConfig },
    Profile: { screen: Profile, navigationOptions: headerConfig },
    History: { screen: History, navigationOptions: headerConfig }
}, {
    initialRouteName: 'ReceiveTopbar'
});

// Topbar trong tab Send
const SendTopbar = createMaterialTopTabNavigator({
    Send: {
        screen: Send,
        navigationOptions: { tabBarLabel: 'Phân công' }
    },
    DangXL: {
        screen: DangXL,
        navigationOptions: { tabBarLabel: 'Đang xử lý' }
    },
    DaXL: {
        screen: DaXL,
        navigationOptions: { tabBarLabel: 'Đã xử lý' }
    }
}, {
    initialRouteName: 'Send',
    order: ['Send', 'DangXL', 'DaXL'],
    tabBarOptions: {
        style: { backgroundColor: '#0057AA' }
    }
});

// Cụm send screens
const SendStack = createStackNavigator({
    SendTopbar: {
        screen: SendTopbar,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: '#0057AA' },
            headerRight: <Icon name="plus-circle" color='white' size={24} style={{marginRight: 15}}
                            onPress={() => navigation.navigate('MakeRQ')} />,
            headerLeft: <Image style={{width: 105, height: 35, marginLeft: 25}} source={require('./img/mobi-top.png')} />
        })
    },
    MakeRQ: { screen: MakeRQ, navigationOptions: headerConfig }
}, {
    initialRouteName: 'SendTopbar'
});

// Bottom bar tabs
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

// Config screens của toàn app
export const LoginStack = createStackNavigator({
    Login: {
        screen: Login,
    },
    BottomTabNav: { screen: BottomTabNav }
}, {
    mode: 'modal',
    headerMode: 'none'
});