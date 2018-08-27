import React, { Component } from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import {Container, Header, Content} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import DataAction from "../apiData";
import {settingStyle} from '../LayoutStyle';
import {themeUse} from '../themecolor';
// import {themeUse} from './Setting';

const data =[{name: 'Họ tên'},
    {name: 'Username'},
    {name: 'Số điện thoại'},
    {name: 'Đơn vị'},
    {name: 'Email'}
];
export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state ={
            infoUser: '',
            globUser: ''
        }
    }
    componentWillMount(){
        DataAction.getUser().then((user) => {
            this.setState({ globUser: user });
            DataAction.getUserInfo(this.state.globUser).then((response) => {
                this.setState({
                    infoUser: response,
                })
                {console.log(this.state.infoUser)};
            }).catch((error) => {
                console.log(error)
            })
        })
    }
    setTextProfile = (lab) => {
        if(lab === 'Họ tên'){
            return this.state.infoUser.fullname;
        }
        else if(lab === 'Username'){
            return this.state.infoUser.username
        }
        else if(lab === 'Số điện thoại'){
            return this.state.infoUser.phone
        }
        else if(lab === 'Đơn vị'){
            return this.state.infoUser.departmentCode
        }
        else if(lab === 'Email'){
            return this.state.infoUser.email
        }
    };

    static navigationOptions = {
        headerTitle: 'Profile'
    };

    render() {
        return (
            <LinearGradient colors={[themeUse.startGradient, themeUse.endGradient]} style={settingStyle.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
              <Content style={{marginHorizontal: 30}}>
                <View style={settingStyle.headerTop}>
                  <Text style={settingStyle.textTop}>THÔNG TIN CỦA BẠN</Text>
                </View>
                <View style={{marginTop: 50}}>
                    {data.map((item) => {
                        return(
                            <View style={settingStyle.viewItem}>
                              <Text style={settingStyle.itemLabel}>{item.name}</Text>
                              <Text style={settingStyle.itemContent}>{this.setTextProfile(item.name)}</Text>
                            </View>
                        );
                    })}
                </View>
              </Content>
            </LinearGradient>
        );
    }
}
