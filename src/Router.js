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
import History from './ReceiveRQ/History';
import DetailsSend from './SendRQ/DetailsSend';
import {themeUse} from './themecolor';
// import {themeUse} from './Setting/Setting';

console.disableYellowBox = true;

// Config header màn hình trong stack
const headerConfig = {
    headerStyle: { backgroundColor: themeUse.primaryColor },
    headerTintColor: themeUse.textColor,
    headerTitleStyle: { flex: 1, textAlign: 'center', alignSelf: 'center' }
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
    Search: {
        screen: Search,
        navigationOptions: {
            headerStyle: { backgroundColor: themeUse.primaryColor },
            headerLeft: <Image style={{width: 105, height: 35, marginLeft: 25}} source={require('./img/mobi-top.png')} />
        }
    },
    Results: { screen: Results, navigationOptions: headerConfig },
    Details: { screen: Details, navigationOptions: headerConfig }
});

// Cụm setting screens
const SettingStack = createStackNavigator({
    Setting: {
        screen: Setting,
        navigationOptions: {
            headerStyle: { backgroundColor: themeUse.primaryColor },
            headerLeft: <Image style={{width: 105, height: 35, marginLeft: 25}} source={require('./img/mobi-top.png')} />
        }
    },
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
        style: { backgroundColor: themeUse.primaryColor },
        upperCaseLabel: false
    }
});

// Cụm receive screens
const ReceiveStack = createStackNavigator({
    ReceiveTopbar: {
        screen: ReceiveTopbar,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: themeUse.primaryColor },
            headerRight: <Icon name="user" color={themeUse.inactiveIconBottom} size={24} style={{marginRight: 15}}
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
        style: { backgroundColor: themeUse.primaryColor },
        upperCaseLabel: false
    }
});

// Cụm send screens
const SendStack = createStackNavigator({
    SendTopbar: {
        screen: SendTopbar,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: themeUse.primaryColor },
            headerRight: <Icon name="plus-circle" color={themeUse.inactiveIconBottom} size={24} style={{marginRight: 15}}
                            onPress={() => navigation.navigate('MakeRQ')} />,
            headerLeft: <Image style={{width: 105, height: 35, marginLeft: 25}} source={require('./img/mobi-top.png')} />
        })
    },
    MakeRQ: { screen: MakeRQ, navigationOptions: headerConfig },
    DetailsSend: { screen: DetailsSend, navigationOptions: headerConfig }
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
        activeTintColor: themeUse.activeIconBottom,
        inactiveTintColor: themeUse.inactiveIconBottom,
        style: { backgroundColor: themeUse.primaryColor }
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