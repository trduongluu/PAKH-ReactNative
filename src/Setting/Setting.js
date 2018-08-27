import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Switch} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Content, Right} from 'native-base';

import {settingStyle} from '../LayoutStyle';
import DataAction from '../apiData';
import {themeUse} from '../themecolor';

let themeblue = {
    primaryColor: '#0057AA',
    textColor: 'white',
    textContent: 'white',
    placeholdertxtColor: 'rgba(255,255,255,0.7)',
    startGradient: '#0057AA',
    endGradient: '#A9F8FF',
    activityIndicator: '#A9F8FF',
    borderItem: '#95afc0',
    activeIconBottom: '#9CDCFF',
    inactiveIconBottom: 'white',
    lineColor: '#383838',
    switchColor: '#f9feff'
};
let themelight = {
    primaryColor: '#0057AA',
    textColor: 'black',
    textContent: 'black',
    placeholdertxtColor: 'rgba(0,0,0,0.6)',
    startGradient: 'white',
    endGradient: 'white',
    activityIndicator: 'black',
    borderItem: 'black',
    activeIconBottom: '#9CDCFF',
    inactiveIconBottom: 'white',
    lineColor: '#383838',
    switchColor: '#f9feff'
};
// export var themeUse = themeblue;

export default class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }

    changeColor(value) {
        this.setState({toggle: value})
        // if (value) {
        //     themeUse = themelight
        // } else {
        //     themeUse = themeblue
        // }
        console.log(value);
    }

    render() {
        return (
            <LinearGradient colors={[themeUse.startGradient, themeUse.endGradient]} style={settingStyle.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}}>
                <Content style={{marginHorizontal: 10}}>
                    <View style={settingStyle.taikhoanView}>
                        <Text style={settingStyle.txtHeadlines}>Tài Khoản</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Profile')}>
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
                                value={this.state.toggle}
                                onValueChange={(value) => this.changeColor(value)}
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
