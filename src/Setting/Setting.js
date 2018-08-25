import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Switch} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Content, Right} from 'native-base';

import {settingStyle} from '../LayoutStyle';
import DataAction from '../apiData';
import {themeUse} from '../themecolor';

export default class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // infoUserss: this.props.navigation.state.params.infoUsers,
            infoUserss: '',
            on_off: true,
        }
    }

    setOnOff() {
        this.setState({on_off: !this.state.on_off})
    }

    render() {
        return (
            <LinearGradient colors={[themeUse.startGradient, themeUse.endGradient]} style={settingStyle.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}}>
                <Content style={{marginHorizontal: 10}}>
                    <View style={settingStyle.taikhoanView}>
                        <Text style={settingStyle.txtHeadlines}>Tài Khoản</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Profile', {infoU: this.state.infoUserss})}>
                            <Text style={settingStyle.txtChild}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={settingStyle.txtChild}>Mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={settingStyle.themeView}>
                        <Text style={settingStyle.txtHeadlines}>Chủ đề giao diện</Text>
                        <Right>
                            <Switch
                                onValueChange={(value) => this.setState({toggled: value})}
                                value={this.state.toggled}
                                onTintColor={themeUse.switchColor}
                                thumbTintColor={themeUse.switchColor}
                            />
                        </Right>
                    </View>
                    <View style={settingStyle.logoutView}>
                        <TouchableOpacity style={{paddingVertical: 10}}
                                          onPress={() => {
                                              DataAction.removeUser();
                                              this.props.navigation.navigate('Login')
                                          }}>
                            <Text style={settingStyle.txtHeadlines}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </LinearGradient>
        );
    }
}
