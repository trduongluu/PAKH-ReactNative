import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Container, Header, Content, Icon,} from 'native-base';
import styles from "./styles";
import {receiveStyle} from '../LayoutStyle';
import DataAction from '../apiData';
import Communications from 'react-native-communications';
import common from "../common/Common";


export default class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemDetail: this.props.navigation.state.params.dataDetails,
            rep_users: '',
            pro_users: '',
        }
    }

    componentWillMount() {

        DataAction.getUserInfo(this.state.itemDetail.req_user).then((obj) => {
            this.setState({rep_users: obj})
            console.log("Nguoi gui: " + this.state.rep_users)
        }).catch((error) => {
            return ''
        })
        DataAction.getUserInfo(this.state.itemDetail.pro_user).then((obj) => {
            this.setState({pro_users: obj})
            console.log("Nguoi nhan: " + this.state.pro_users)
        }).catch((error) => {
            return ''
        })
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#0057AA',
        },
        headerTitle: 'Chi tiết'
    };

    render() {
        return (
            <LinearGradient colors={['#0057AA', '#A9F8FF']} style={receiveStyle.bground}
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}}>
                <Content style={{marginHorizontal: 7}}>
                    <View style={styles.view_one}>
                        <View style={styles.view_tinhcuoc}>
                            <Text style={styles.txt_tinhcuoc}>{this.state.itemDetail.req_title}</Text>
                        </View>
                        <View style={styles.view_hethong}>
                            <View style={{flex: 0.2}}></View>
                            <View style={{flex: 0.3}}>
                                <Text style={{fontWeight: 'bold', color: '#fff'}}>Hệ Thống</Text>
                            </View>
                            <View style={{flex: 0.1}}></View>
                            <View style={{flex: 0.4}}>
                                <Text style={{color: '#fff'}}>{this.state.itemDetail.req_system_code}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.view_time}>
                        <Icon name='time' style={[{fontSize: 17, marginRight: 10}, styles.txt_value_sent_details]}/>
                        <Text style={styles.txt_time}>Thời gian</Text>
                        <Text style={{flex: 0.6, color: '#fff'}}>{this.state.itemDetail.req_date}
                            - {this.state.itemDetail.pro_plan}</Text>
                    </View>
                    <View style={styles.view_sum_sent}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={styles.view_sent}>
                                <Text style={styles.txt_sent}>Người gửi</Text>
                            </View>

                            <View style={{flex: 0.6, marginLeft: 10}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name='person' style={[{fontSize: 17, marginRight: 10}, styles.txt_value_sent_details]}/>
                                    <Text style={styles.txt_value_sent_details}>{this.state.itemDetail.req_user} -
                                        Phòng: {this.state.itemDetail.req_dep_code} </Text>
                                </View>
                                <TouchableOpacity style={{flexDirection: 'row'}}
                                                  onPress={() => Communications.phonecall(this.state.rep_users.phone, true)}>
                                    <Icon name='call' style={[{fontSize: 17, marginRight: 10}, styles.txt_value_sent_details]}/>
                                    <Text style={styles.txt_value_sent_details}>
                                        Gọi: {this.state.rep_users.phone}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.view_sum_sent}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={styles.view_sent}>
                                <Text style={styles.txt_sent}>Người Nhận</Text>
                            </View>
                            {(this.state.pro_users !== '') ? <View style={{flex: 0.6, marginLeft: 10}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name='person' style={[{fontSize: 17, marginRight: 10}, styles.txt_value_sent_details]}/>
                                    <Text style={styles.txt_value_sent_details}>{this.state.itemDetail.pro_user} -
                                        Phòng: {this.state.itemDetail.pro_dep_code} </Text>
                                </View>
                                <TouchableOpacity style={{flexDirection: 'row'}}
                                                  onPress={() => Communications.phonecall(this.state.pro_users.phone, true)}>
                                    <Icon name='call' style={[{fontSize: 17, marginRight: 10}, styles.txt_value_sent_details]}/>
                                    <Text style={styles.txt_value_sent_details}>
                                        Gọi: {this.state.pro_users.phone}</Text>
                                </TouchableOpacity>
                            </View> : <View></View>}
                        </View>
                    </View>

                    <View style={styles.view_content_reques}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='ios-paper' style={[{fontSize: 17, marginRight: 10}, styles.txt_value_sent_details]}/>
                            <Text style={styles.txt_value_reques}>Nội dung yêu cầu</Text>
                        </View>
                        <Text style={{color: '#fff', marginLeft: 22}}>{this.state.itemDetail.req_content}</Text>
                    </View>

                    <View style={styles.view_content_reques}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='document' style={[{fontSize: 17, marginRight: 10}, styles.txt_value_sent_details]}/>
                            <Text style={styles.txt_value_reques}>Nội dung Xử lý</Text>
                        </View>
                        <Text style={{color: '#fff', marginLeft: 22}}>{this.state.itemDetail.pro_content}</Text>
                    </View>

                    <View style={styles.view_content_reques}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='attach' style={[{fontSize: 17, marginRight: 10}, styles.txt_value_sent_details]}/>
                            <Text style={styles.txt_value_reques}>Tệp Đính Kèm</Text>
                        </View>
                        <Text style={{color: '#3a73ff', marginLeft: 22}}>teptinhkem.docx</Text>
                    </View>
                </Content>
            </LinearGradient>
        );
    }
}

