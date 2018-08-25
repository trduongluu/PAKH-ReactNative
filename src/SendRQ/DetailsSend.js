import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Container, Header, Content, Icon} from 'native-base';
import {receiveStyle, searchStyle} from '../LayoutStyle';
import DataAction from '../apiData';
import Communications from 'react-native-communications';
import {themeUse} from '../themecolor';

export default class DetailsSend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemDetail: this.props.navigation.state.params.dataDetails,
            rep_users: '',
            pro_users: '',
        }
    }

    componentWillMount() {
        DataAction.getUserInfo(this.state.itemDetail.rep_user).then((obj) => {
            this.setState({rep_users: obj})
        }).catch((error) => {
            return ''
        })
        DataAction.getUserInfo(this.state.itemDetail.pro_user).then((obj) => {
            this.setState({pro_users: obj})
        }).catch((error) => {
            return ''
        })
    }

    static navigationOptions = {
        headerTitle: 'Chi tiết'
    };

    render() {
        return (
            <LinearGradient colors={[themeUse.startGradient, themeUse.endGradient]} style={receiveStyle.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}}>
                <Content style={{marginHorizontal: 7}}>
                    <View style={searchStyle.view_one}>
                        <View style={searchStyle.view_tinhcuoc}>
                            <Text style={searchStyle.txt_tinhcuoc}>{this.state.itemDetail.req_title}</Text>
                        </View>
                        <View style={searchStyle.view_hethong}>
                            <View style={{flex: 0.2}}></View>
                            <View style={{flex: 0.3}}>
                                <Text style={{fontWeight: 'bold', color: themeUse.textColor}}>Hệ Thống</Text>
                            </View>
                            <View style={{flex: 0.1}}></View>
                            <View style={{flex: 0.4}}>
                                <Text style={{color: themeUse.textColor}}>{this.state.itemDetail.req_system_code}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={searchStyle.view_time}>
                        <Icon name='time' style={[{fontSize: 17, marginRight: 10}, searchStyle.txt_value_sent_details]}/>
                        <Text style={searchStyle.txt_time}>Thời gian</Text>
                        <Text style={{flex: 0.6, color: themeUse.textColor}}>{this.state.itemDetail.req_date} đến {this.state.itemDetail.pro_plan}</Text>
                    </View>
                    <View style={searchStyle.view_sum_sent}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={searchStyle.view_sent}>
                                <Text style={searchStyle.txt_sent}>Người gửi</Text>
                            </View>

                            <View style={{flex: 0.6, marginLeft: 10}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name='person' style={[{fontSize: 17, marginRight: 10}, searchStyle.txt_value_sent_details]}/>
                                    <Text style={searchStyle.txt_value_sent_details}>{this.state.itemDetail.req_user} -
                                        Phòng: {this.state.itemDetail.req_dep_code} </Text>
                                </View>
                                <TouchableOpacity style={{flexDirection: 'row'}}
                                                  onPress={() => Communications.phonecall(this.state.rep_users.phone, true)}>
                                    <Icon name='call' style={[{fontSize: 17, marginRight: 10}, searchStyle.txt_value_sent_details]}/>
                                    <Text style={searchStyle.txt_value_sent_details}>
                                        Gọi: {this.state.rep_users.phone}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={searchStyle.view_sum_sent}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={searchStyle.view_sent}>
                                <Text style={searchStyle.txt_sent}>Người Nhận</Text>
                            </View>
                            {(this.state.pro_users !== '') ? <View style={{flex: 0.6, marginLeft: 10}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name='person' style={[{fontSize: 17, marginRight: 10}, searchStyle.txt_value_sent_details]}/>
                                    <Text style={searchStyle.txt_value_sent_details}>{this.state.itemDetail.pro_user} -
                                        Phòng: {this.state.itemDetail.pro_dep_code} </Text>
                                </View>
                                <TouchableOpacity style={{flexDirection: 'row'}}
                                                  onPress={() => Communications.phonecall(this.state.pro_users.phone, true)}>
                                    <Icon name='call' style={[{fontSize: 17, marginRight: 10}, searchStyle.txt_value_sent_details]}/>
                                    <Text style={searchStyle.txt_value_sent_details}>
                                        Gọi: {this.state.pro_users.phone}</Text>
                                </TouchableOpacity>
                            </View> : <View></View>}
                        </View>
                    </View>

                    <View style={searchStyle.view_content_reques}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='ios-paper' style={[{fontSize: 17, marginRight: 10}, searchStyle.txt_value_sent_details]}/>
                            <Text style={searchStyle.txt_value_reques}>Nội dung yêu cầu</Text>
                        </View>
                        <Text style={{color: themeUse.textColor, marginLeft: 22}}>{this.state.itemDetail.req_content}</Text>
                    </View>

                    <View style={searchStyle.view_content_reques}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='document' style={[{fontSize: 17, marginRight: 10}, searchStyle.txt_value_sent_details]}/>
                            <Text style={searchStyle.txt_value_reques}>Nội dung Xử lý</Text>
                        </View>
                        <Text style={{color: themeUse.textColor, marginLeft: 22}}>{this.state.itemDetail.pro_content}</Text>
                    </View>

                    <View style={searchStyle.view_content_reques}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='attach' style={[{fontSize: 17, marginRight: 10}, searchStyle.txt_value_sent_details]}/>
                            <Text style={searchStyle.txt_value_reques}>Tệp Đính Kèm</Text>
                        </View>
                        <Text style={{color: themeUse.textContent, marginLeft: 22}}>teptinhkem.docx</Text>
                    </View>
                </Content>
            </LinearGradient>
        );
    }
}

