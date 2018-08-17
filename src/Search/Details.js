import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity, TextInput, ImageBackground} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {Container, Header, Content} from 'native-base'
import styles from "./styles";
import {receiveStyle} from '../LayoutStyle';


export default class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemDetail: this.props.navigation.state.params.dataDetails
        }
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
                            start={{x: 0, y: 0}} end={{x: 1.2, y: 1.1}} >
                <Content style={{marginHorizontal: 7}}>
                    <View style={styles.view_one}>
                        <View style={styles.view_tinhcuoc}>
                            <Text style={styles.txt_tinhcuoc}>{this.state.itemDetail.req_title}</Text>
                        </View>
                        <View style={styles.view_hethong}>
                            <View style={{flex: 0.2}}></View>
                            <View style={{flex: 0.3}}>
                                <Text style={{fontWeight: 'bold',color: '#fff'}}>Hệ Thống</Text>
                            </View>
                            <View style={{flex: 0.1}}></View>
                            <View style={{flex: 0.4}}>
                                <Text style={{color: '#fff'}}>{this.state.itemDetail.req_system_code}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.view_time}>
                        <Text style={styles.txt_time}>Thời gian</Text>
                        <Text style={{flex: 0.6,color: '#fff'}}>{this.state.itemDetail.req_date}
                            - {this.state.itemDetail.pro_plan}</Text>
                    </View>
                    <View style={styles.view_sum_sent}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={styles.view_sent}>
                                <Text style={styles.txt_sent}>Người
                                    gửi</Text>
                            </View>

                            <View style={{flex: 0.6, marginLeft: 10}}>
                                <Text style={styles.txt_value_sent}>{this.state.itemDetail.req_user} -
                                    Phòng {this.state.itemDetail.req_dep_code} </Text>
                                <Text style={styles.txt_value_sent}> Gọi: 0954354535</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.view_sum_sent}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={styles.view_sent}>
                                <Text style={styles.txt_sent}>Người
                                    Nhận</Text>
                            </View>

                            <View style={{flex: 0.6, marginLeft: 10}}>
                                <Text style={styles.txt_value_sent}>{this.state.itemDetail.pro_user} -
                                    Phòng {this.state.itemDetail.pro_dep_code} </Text>
                                <Text style={styles.txt_value_sent}> Gọi: 0954354535</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.view_content_reques}>
                        <Text style={styles.txt_value_reques}>Nội dung yêu cầu</Text>
                        <Text style={{color: '#fff'}}>{this.state.itemDetail.req_content}</Text>
                    </View>

                    <View style={styles.view_content_reques}>
                        <Text style={styles.txt_value_reques}>Nội dung Xử lý</Text>
                        <Text style={{color: '#fff'}}>Sửa tính cước thuê bao, tính cước theo tiêu chuẩn mới ban hành ngày 15/4//2018</Text>
                        <Text style={{color: '#fff'}}>Sửa tính cước thuê bao, tính cước theo tiêu chuẩn mới ban hành ngày 15/4//2018</Text>
                        <Text style={{color: '#fff'}}>Sửa tính cước thuê bao, tính cước theo tiêu chuẩn mới ban hành ngày 15/4//2018</Text><Text style={{color: '#fff'}}>Sửa tính cước thuê bao, tính cước theo tiêu chuẩn mới ban hành ngày 15/4//2018</Text>
                        <Text style={{color: '#fff'}}>Sửa tính cước thuê bao, tính cước theo tiêu chuẩn mới ban hành ngày 15/4//2018</Text>


                    </View>

                    <View style={styles.view_content_reques}>
                        <Text style={styles.txt_value_reques}>Tệp Đính Kèm</Text>
                        <Text style={{color: '#3a73ff'}}>teptinhkem.docx</Text>
                    </View>
                </Content>
            </LinearGradient>
        );
    }
}

