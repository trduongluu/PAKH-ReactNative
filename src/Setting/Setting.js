import React, { Component } from 'react';
import {View, Text,Image, TouchableOpacity,Switch} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {Content, Right} from 'native-base'

import Profile from './Profile'
import Login from '../Login/Login'
import styles from "./styles";

export  default class Setting extends Component {
    constructor(props){
        super(props);
        this.state ={
           // infoUserss: this.props.navigation.state.params.infoUsers,
            infoUserss:'',
            on_off: true,
        }
    }
    setOnOff(){
        this.setState({on_off: !this.state.on_off})
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#0057AA',
        },
        headerLeft: <Image style={{width: 105, height: 35, marginLeft: 25}} source={require('../img/mobi-top.png')} />
    };

    render() {
        return (
            <LinearGradient colors={['#0057AA', '#A9F8FF']} style={styles.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
              <Content style={{marginHorizontal: 10}}>
                <View style={{borderBottomWidth:1, borderBottomColor: '#6677ff'}}>
                  <TouchableOpacity style={{paddingVertical: 10}} onPress ={() => this.props.navigation.navigate('Profile', {infoU: this.state.infoUserss})}>
                    <Text style={{fontWeight: 'bold', color: '#fff'}}>Tài Khoản</Text>
                    <Text style={{ color: '#fff'}}>Profile</Text>
                    <Text style={{ color: '#fff'}}>Mật khẩu</Text>
                  </TouchableOpacity>
                </View>
                <View style={{paddingVertical: 10, borderBottomWidth:1, borderBottomColor: '#6677ff', flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold', color: '#fff'}}>Chủ đề giao diện</Text>
                    <Right >
                        <Switch
                            onValueChange={ (value) => this.setState({ toggled: value })}
                            value={ this.state.toggled }
                            onTintColor={'#7cf002'}
                            thumbTintColor={'#7cf002'}
                        />
                    </Right>
                </View>
                <View style={{borderBottomWidth:1, borderBottomColor: '#6677ff'}}>
                  <TouchableOpacity style={{paddingVertical: 10}} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{fontWeight: 'bold', color: '#fff'}}>Đăng xuất</Text>
                  </TouchableOpacity>
                </View>
              </Content>
            </LinearGradient>
        );
    }
}
